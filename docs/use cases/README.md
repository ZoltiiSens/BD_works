# Модель прецедентів

## 1. Діаграма прецедентів
@startuml

usecase "Зареєструватись" as NEW_CUSTOMER_CREATE
usecase "Авторизуватись" as CUSTOMER_LOGIN
usecase "Пройти опитування" as TAKE_SURVEY
usecase "Подивитись доступні опитування" as LOOK_SURVEY
usecase "Подивитись пройдені опитування" as COMPLETED_SURVEY
usecase "Створити нове опитування" as CREATE_SURVEY
usecase "Редагувати опитування" as EDIT_SURVEY
usecase "Надати інформацію щодо опитування" as EXPLAIN_SURVEY
usecase "Видалити користувача" as BAN_USER
usecase "Видалити опитування" as DELETE_SURVEY


Гість ---> NEW_CUSTOMER_CREATE
Гість ---> TAKE_SURVEY
Гість ---> LOOK_SURVEY
Респондент ---> CUSTOMER_LOGIN
Респондент ---> COMPLETED_SURVEY
Інтервюер ---> CREATE_SURVEY
Інтервюер ---> EDIT_SURVEY
Адміністратор ---> EXPLAIN_SURVEY
Адміністратор ---> BAN_USER
Адміністратор ---> DELETE_SURVEY


Гість ---|> Респондент
Респондент ---|> Інтервюер
Інтервюер ---|> Адміністратор


@enduml
## 2. Usecases для гостя
@startuml

usecase "Зареєструватись" as NEW_CUSTOMER_CREATE
usecase "Пройти опитування" as TAKE_SURVEY
usecase "Подивитись доступні опитування" as LOOK_SURVEY
usecase "Додати фото профіля" as ADD_PROFILE_PHOTO
usecase "Обрати логін" as CHOOSE_NICKNAME
usecase "Встановити пароль" as CHOOSE_PASSWORD

Гість ---> NEW_CUSTOMER_CREATE
Гість ---> TAKE_SURVEY
Гість ---> LOOK_SURVEY

ADD_PROFILE_PHOTO  ...> NEW_CUSTOMER_CREATE: extends
CHOOSE_NICKNAME ...> NEW_CUSTOMER_CREATE: extends
CHOOSE_PASSWORD ...> NEW_CUSTOMER_CREATE: extends

@enduml
## 3. Usecases для респондента
@startuml

usecase "Авторизуватись" as CUSTOMER_LOGIN
usecase "Подивитись пройдені опитування" as COMPLETED_SURVEY
usecase "Відновити пароль" as RESTORE_PASSWORD

Респондент ---> CUSTOMER_LOGIN
Респондент ---> COMPLETED_SURVEY

RESTORE_PASSWORD ...> CUSTOMER_LOGIN: extends

@enduml
## 4. Usecases для інтерв'юера
@startuml
usecase "Налаштувати нове опитування" as SET_SURVEY
usecase "Створити нове опитування" as CREATE_SURVEY
usecase "Редагувати опитування" as EDIT_SURVEY

Інтервюер ---> CREATE_SURVEY
Інтервюер ---> EDIT_SURVEY

SET_SURVEY ...> CREATE_SURVEY: extends

@enduml
## 5. Usecases для адміністратора
@startuml
usecase "Надати інформацію щодо опитування" as EXPLAIN_SURVEY
usecase "Видалити користувача" as BAN_USER
usecase "Видалити опитування" as DELETE_SURVEY

Адміністратор ---> EXPLAIN_SURVEY
Адміністратор ---> BAN_USER
Адміністратор ---> DELETE_SURVEY

@enduml
## 7. Сценарії
| **1. ID:**             | NEW_CUSTOMER_CREATION                     |
|------------------------|-------------------------------------------|
| **НАЗВА:**             | Створити обліковий запис                  |
| **УЧАСНИКИ:**          | Клієнт, система                           |
| **ПЕРЕДУМОВИ:**        | Клієнт не має облікового запису           |
| **РЕЗУЛЬТАТ:**         | Обліковий запис                           |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Некорректно введені дані                  |
| **ОСНОВНІ СЦЕНАРІЇ:**  | 1. Клієнт заповнює форму                  |
|                        | 2. Система перевіряє надані дані          |
|                        | 3. Система зберігає інформацю про клієнта |
|                        | 4. Система створює обліковий запис        |
|                        | 5. Система надає обліковий запис клієнту  |
@startuml
|Клієнт|
start;
:Клікає на "Зареєструватись";

|Система|
:Генерує форму реєстрації;
:Відправляє форму реєстрації;

|Клієнт|
:Приймає форму реєстрація;
:Заповнює форму реєстрації;
:Клікає на "Відправити";

|Система|
:Перевіряє надані дані;
:Зберігає інформацію про клієнта;
:Створює обліковий запис;
:Надає обліковий запис;

|Клієнт|
stop;
@enduml