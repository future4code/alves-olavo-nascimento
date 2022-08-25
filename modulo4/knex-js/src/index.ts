import { Request, Response } from "express"
import app from "./app";
import connection from "./conection";


// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM actor WHERE id = '${id}'
  `)

    return result[0][0]
}


// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });

// Assim a chamada funciona fora dos endpoints com await
(async () => {
    console.log(await getActorById("001"))
})()


// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        console.log(await getActorById(id))

        res.end()
    } catch (error) {
        console.log(error)
        res.status(500).send("Unexpected error")
    }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal



// Exercício
// a)  o método raw, que permite que enviemos uma query para o banco usando a 
// linguagem SQL diretamente

// b)
const getActorName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    select * from actor where name="${name}"
  `)
    return result[0]
}

app.get("/actor/name", async (req: Request, res: Response) => {
    try {
        const nameBody = req.body.name

        console.log(await getActorName(nameBody))

        res.end()
    } catch (error) {
        console.log(error)
        res.status(500).send("Unexpected error")
    }
})

// c)
const getActorGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    select count(*) from actor where gender="${gender}"
  `)
    return result[0]
}

app.get("/actor/gender", async (req: Request, res: Response) => {
    try {
        const genderBody = req.body.gender
        console.log(genderBody)
        console.log(await getActorGender(genderBody))

        res.end()
    } catch (error) {
        console.log(error)
        res.status(500).send("Unexpected error")
    }
})

// Exercício 2

const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
): Promise<void> => {
    await connection
        .insert({
            id: id,
            name: name,
            salary: salary,
            birth_date: dateOfBirth,
            gender: gender,
        })
        .into("Actor");
};

// a)

const updateSalary = async (salary: number, id: string): Promise<void> => {
    await connection("actor").update({
        salary: salary
    }).where("id", id)
}


app.put("/actor/salary/:id", async (req: Request, res: Response) => {
    try {
        const salary: number = req.body.salary
        const id: string = req.params.id

        console.log(salary, id)
        await updateSalary(salary, id)
        res.send();
    } catch (error) {
        res.status(500).send("Um erro inesperado aconteceu")
    }
})

// b)
const deleteActor = async (id: string): Promise<void> => {
    await connection("actor").delete().where("id", id)
}

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id

        await deleteActor(id)
        res.send();
    } catch (error) {
        res.status(500).send("Um erro inesperado aconteceu")
    }
})

// c)
const averageSalary = async (gender: string): Promise<void> => {
    const result = await connection("actor").avg("salary as salary")
        .where({ gender })
    return result[0].salary
}

app.get("/actor/salary/gender", async (req: Request, res: Response) => {
    try {
        const genderBody: string = req.body.gender

        console.log(await averageSalary(genderBody))
        res.send();
    } catch (error) {
        res.status(500).send("Um erro inesperado aconteceu")
    }
})

// Exercício 3
// a)
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id);

        res.status(200).send(actor)
    } catch (err) {
        res.status(400).send({ message: err });
    }
});

// b)

app.get("/actor?gender=male", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender as string
        const theAmount = await countActors(gender);

        res.status(200).send({ quantity: theAmount })
    } catch (err) {
        res.status(400).send({ message: err });
    }
});

const countActors = async (gender: string) => {
    const result = await connection("actor").count("gender as test")
        .where({ gender })
    return result
}
