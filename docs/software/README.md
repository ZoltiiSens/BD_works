# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних

```
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `project_db`
--

-- --------------------------------------------------------

--
-- Структура таблиці `action`
--

CREATE TABLE `action` (
  `id` int(11) NOT NULL,
  `status` text NOT NULL,
  `date` date NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблиці `answer`
--

CREATE TABLE `answer` (
  `id` int(11) NOT NULL,
  `creationDate` date NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблиці `options`
--

CREATE TABLE `options` (
  `id` int(11) NOT NULL,
  `type` text NOT NULL,
  `question_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблиці `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `survey_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблиці `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблиці `selectedoption`
--

CREATE TABLE `selectedoption` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `option_id` int(11) DEFAULT NULL,
  `answer_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблиці `survey`
--

CREATE TABLE `survey` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `creationDate` date NOT NULL,
  `expirationDate` date NOT NULL,
  `status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблиці `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `username` text NOT NULL,
  `role_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `action`
--
ALTER TABLE `action`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Індекси таблиці `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `question_id` (`question_id`);

--
-- Індекси таблиці `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`);

--
-- Індекси таблиці `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `survey_id` (`survey_id`);

--
-- Індекси таблиці `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `selectedoption`
--
ALTER TABLE `selectedoption`
  ADD PRIMARY KEY (`id`),
  ADD KEY `option_id` (`option_id`),
  ADD KEY `answer_id` (`answer_id`);

--
-- Індекси таблиці `survey`
--
ALTER TABLE `survey`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `action`
--
ALTER TABLE `action`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `answer`
--
ALTER TABLE `answer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `options`
--
ALTER TABLE `options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `selectedoption`
--
ALTER TABLE `selectedoption`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `survey`
--
ALTER TABLE `survey`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблиці `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Обмеження зовнішнього ключа збережених таблиць
--

--
-- Обмеження зовнішнього ключа таблиці `action`
--
ALTER TABLE `action`
  ADD CONSTRAINT `action_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Обмеження зовнішнього ключа таблиці `answer`
--
ALTER TABLE `answer`
  ADD CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `answer_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`);

--
-- Обмеження зовнішнього ключа таблиці `options`
--
ALTER TABLE `options`
  ADD CONSTRAINT `options_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`);

--
-- Обмеження зовнішнього ключа таблиці `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`survey_id`) REFERENCES `survey` (`id`);

--
-- Обмеження зовнішнього ключа таблиці `selectedoption`
--
ALTER TABLE `selectedoption`
  ADD CONSTRAINT `selectedoption_ibfk_1` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  ADD CONSTRAINT `selectedoption_ibfk_2` FOREIGN KEY (`answer_id`) REFERENCES `answer` (`id`);

--
-- Обмеження зовнішнього ключа таблиці `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

```

## RESTfull сервіс для управління даними

### Файл index.ts

```typescript
import _ as express from "express"
import _ as bodyParser from "body-parser"
import userRouter from "./routers/user.router"

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(userRouter)

app.listen(3000)
```

### Файл User.repository.ts

```typescript
import {Connection} from "mysql2/promise"
import UserCreationDto from "../dto/user/IUserCreation.dto"
import IUserUpdateDto from "../dto/user/IUserUpdate.dto"
import prepareUpdateRows from "../utils/prepareUpdateRows"
import IUserDto from "../dto/user/IUser.dto"
import username from "../utils/data_objects/user/Username"
import Id from "../utils/data_objects/user/Id"

class UserRepository {
private \_database: Connection

    constructor(database: Connection) {
        this._database = database
    }

    public async create({ email, password, username }: UserCreationDto): Promise<void> {
        await this._database.execute(
            "INSERT INTO user(email, password, username) VALUES (?,?,?)",
            [email.get(), password.get(), username.get()]
        )
    }

    public async update({ username, password, email, id }: IUserUpdateDto): Promise<any> {
        await this._validateUserExisting(id)
        const [updateLine, params] = prepareUpdateRows(
            ["username", "password", "email"],
            {username: username.get(), password: password.get(), email: email.get()}
        )
        await this._database.execute(
            `UPDATE user SET ${updateLine} WHERE id = ?`,
            [...params, id.get()]
        )
    }

    public async getById(id: Id) : Promise<IUserDto> {
        await this._validateUserExisting(id)
        const [row] = await this._database.execute("SELECT * FROM user WHERE id = ?", [id.get()])
        return row[0]
    }

    public async delete(id: Id): Promise<void> {
        await this._validateUserExisting(id)
        await this._database.execute("DELETE FROM user WHERE id = ?", [id.get()])
    }

    public async isExists(id: Id): Promise<boolean> {
        const [row] = await this._database.execute("SELECT COUNT(*) = 1 as isExists FROM user WHERE id = ?", [id.get()])
        return row[0]["isExists"]
    }

    private async _validateUserExisting(id: Id) : Promise<void> {
        if(!await this.isExists(id)) throw new Error("No user with this id")
    }

}

export default UserRepository
```

### Файл database.ts

```typescript
import { createConnection, Connection } from "mysql2/promise"

class Database {
private static \_connection: Connection

     async get(): Promise<Connection> {
         if (Database._connection) return Database._connection
         return Database._connection = await createConnection({
             host: "localhost",
             user: "root",
             password: "",
             database: "project_db"
         })
     }

}

export default Database
```

### Файл User.controller.ts

```typescript
import \* as express from "express";
import IUserRepository from "./interfaces/IUserRepository"
import Username from "../../utils/data_objects/user/Username"
import Email from "../../utils/data_objects/Email"
import Password from "../../utils/data_objects/user/Password"
import Id from "../../utils/data_objects/user/Id"

class UserController {
private \_repository: IUserRepository

    public constructor(repository: IUserRepository) {
        this._repository = repository
    }

    public async getById(req: express.Request, res: express.Response): Promise<void> {
        try {
            const user = await this._repository.getById(new Id(req.params.id))
            res.status(200).send(JSON.stringify(user))
        } catch(error) {
            res.status(400).send(error.toString())
        }
    }

    public async create(req: express.Request, res: express.Response): Promise<void> {
        const data = req.body
        try {
            await this._repository.create({
                username: new Username(data.username),
                email: new Email(data.email),
                password: new Password(data.password)
            })
        } catch(error) {
            res.status(400).send(error.toString())
            return
        }
        res.status(200).send("User created")
    }

    public async update(req: express.Request, res: express.Response): Promise<void> {
        const data = req.body
        try {
            const updateData = {}
            if(data.username !== undefined) updateData["username"] = new Username(data.username)
            if(data.email !== undefined) updateData["email"] = new Email(data.email)
            if(data.password !== undefined) updateData["password"] = new Password(data.password)
            await this._repository.update({...updateData, id: new Id(data.id)})
            res.status(200).send("User updated")
        } catch(error) {
            res.status(400).send(error.toString())
        }
    }

    public async delete(req: express.Request, res: express.Response): Promise<void> {
        try {
            await this._repository.delete(new Id(req.params.id))
            res.status(200).send("User deleted")
        } catch(error) {
            res.status(400).send(error.toString())
        }
    }

}

export default UserController
```

<br>
Повну структуру RESTful-сервісу для управління даними можна подивитися за <a href="https://github.com/WhtsPoint/boldak_db">посиланням</a>.
