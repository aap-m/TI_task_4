 # ТЗ.     
**1.**	Create a table ACCOUNT using standard object with standard fields (NAME & RATING);     
***2.***	Третьим столбцом добавить Delete;    
***2.1.***	Данный столбик содержит кнопку, которая при наведении меняет цвет    
***2.2.***	При нажатии на кнопку удаляется ряд и обновляется таблица.    
**3.**	Столбцы Account Name & Rating содержат кнопку Edit, которая появляется при наведении на ряд.     
***3.1.***	Кнопка Edit меняет цвет при наведении на нее;      
***3.2.***	При нажатии на кнопку Edit данные ячейки должны редактироваться, при этом остальные кнопки Edit не должны реагировать на клик, не должны быть редактируемыми и так пока юзер не нажмет на cancel или на save;
***3.3.***	При нажатии на кнопку save все ячейки снова можно редактировать, кнопки Edit должны стать кликабельными;
**4.**	При изменении данных ячейки должны 1) появиться футер с кнопками Cancel & Save в размер таблицы 2) цвет отредактированной ячейки изменится на желтый 3) должны быть видны измененные данные;
***4.1.***	При нажатии на Cancel цвет и данные ячейки измениться на прежние, а футер с кнопками скрыться;
***4.2.***	При нажатии на Save должны быть видны измененные данные, цвет ячейки измениться на прежний, футер с кнопками скрыться.
***4.3.***	Страница не должна обновляться, или перезагружаться.
***4.4.***	Ответ из базы данных об успешном редактировании надо показать на странице. Если ошибка то высветить ошибку и изменения вернуть опять же не перезагружая страницу , выполнить это динамически в JS.

**1** Создал в VS lwc, в html и js файле написал таблицу:
![html](https://github.com/aap-m/TI_task_4/blob/main/1.png)
![js](https://github.com/aap-m/TI_task_4/blob/main/2.png)
Сделал контроллер по требуемым филдам:
![Apex](https://github.com/aap-m/TI_task_4/blob/main/3.png)
**2** Добавил кнопку Delete:
![js](https://github.com/aap-m/TI_task_4/blob/main/4.png)
Указал размещение кнопки по центру колонки.
***2.2*** Добавил метод удаления аккаунта по нажатию кнопки detele и всплывающие окна:
![js](https://github.com/aap-m/TI_task_4/blob/main/5.png)
**3** Добавил кнопки edit в столбцы
![js](https://github.com/aap-m/TI_task_4/blob/main/6.png)
***3.1*** Добивил СSS в котором указал изменение кнопки edit за счет opacity:
![css](https://github.com/aap-m/TI_task_4/blob/main/7.png)
***3.2*** Добавил метод редактирования:
![js](https://github.com/aap-m/TI_task_4/blob/main/8.png)
Блокировку элементов таблицы реализовал через элемент slds-box, который накладывается на таблицу при редактировании ячейки через oncellchange:
![all](https://github.com/aap-m/TI_task_4/blob/main/9.png) 
***3.3*** При нажатии кнопки Save происходит обновление данных таблицы убирается slds-box блокирующий редактирование ячеек таблицы:
![js](https://github.com/aap-m/TI_task_4/blob/main/10.png)
**4** ***4.1*** При нажатии на cancel сбрасывается draftValues и убирается slds-box блокирующий редактирование ячеек таблицы:
![js](https://github.com/aap-m/TI_task_4/blob/main/11.png)
***4.2*** Реализуется за счет использования <lightning-datatable>.
***4.4*** Прописаны всплывающие окна по факту успешного или неуспешного редактирования ячеек:
![js](https://github.com/aap-m/TI_task_4/blob/main/12.png)


***Ошибки:***
***1*** Ошибка в написании слова :
![js](https://github.com/aap-m/TI_task_4/blob/main/13.png)
Исправление:
![js](https://github.com/aap-m/TI_task_4/blob/main/14.png)
Описка при написании кода.
***2*** Отсутствует лимит в сокл запросе
![Apex](https://github.com/aap-m/TI_task_4/blob/main/15.png)
Исправление:
![Apex](https://github.com/aap-m/TI_task_4/blob/main/16.png)
Сознательно не ставил лимит на запрос т.к. в песочнице их меньше 15.
***3***	Указал лишний класс:
![css](https://github.com/aap-m/TI_task_4/blob/main/17.png)
Исправление:
![css](https://github.com/aap-m/TI_task_4/blob/main/18.png)
***4***	Отсутствует .cach  в deliteRecord
![js](https://github.com/aap-m/TI_task_4/blob/main/19.png)
Исправление:
![js](https://github.com/aap-m/TI_task_4/blob/main/20.png)
***5***	Сонсоли в коллбэке
![js](https://github.com/aap-m/TI_task_4/blob/main/21.png)
Исправление:
![js](https://github.com/aap-m/TI_task_4/blob/main/22.png)
***6*** Указал в html style:
![html](https://github.com/aap-m/TI_task_4/blob/main/23.png)
Исправление:
![html](https://github.com/aap-m/TI_task_4/blob/main/24.png)
![html](https://github.com/aap-m/TI_task_4/blob/main/25.png)
***7***	Нэйминг
![all](https://github.com/aap-m/TI_task_4/blob/main/26.png)
Исправление:
![all](https://github.com/aap-m/TI_task_4/blob/main/27.png)
