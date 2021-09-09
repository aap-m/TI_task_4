 # ТЗ.<br>
**1.**	Create a table ACCOUNT using standard object with standard fields (NAME & RATING);<br>
***2.***	Третьим столбцом добавить Delete;<br>
***2.1.***	Данный столбик содержит кнопку, которая при наведении меняет цвет<br>
***2.2.***	При нажатии на кнопку удаляется ряд и обновляется таблица.<br>
**3.**	Столбцы Account Name & Rating содержат кнопку Edit, которая появляется при наведении на ряд.<br>
***3.1.***	Кнопка Edit меняет цвет при наведении на нее;<br>
***3.2.***	При нажатии на кнопку Edit данные ячейки должны редактироваться, при этом остальные кнопки Edit не должны реагировать на клик, не должны быть редактируемыми и так пока юзер не нажмет на cancel или на save;<br>
***3.3.***	При нажатии на кнопку save все ячейки снова можно редактировать, кнопки Edit должны стать кликабельными;<br>
**4.**	При изменении данных ячейки должны 1) появиться футер с кнопками Cancel & Save в размер таблицы 2) цвет отредактированной ячейки изменится на желтый 3) должны быть видны измененные данные;<br>
***4.1.***	При нажатии на Cancel цвет и данные ячейки измениться на прежние, а футер с кнопками скрыться;<br>
***4.2.***	При нажатии на Save должны быть видны измененные данные, цвет ячейки измениться на прежний, футер с кнопками скрыться.<br>
***4.3.***	Страница не должна обновляться, или перезагружаться.<br>
***4.4.***	Ответ из базы данных об успешном редактировании надо показать на странице. Если ошибка то высветить ошибку и изменения вернуть опять же не перезагружая страницу , выполнить это динамически в JS.<br>

**1** Создал в VS lwc, в html и js файле написал таблицу:<br>
![html](https://github.com/aap-m/TI_task_4/blob/main/1.png)<br>
![js](https://github.com/aap-m/TI_task_4/blob/main/2.png)<br>
Сделал контроллер по требуемым филдам:<br>
![Apex](https://github.com/aap-m/TI_task_4/blob/main/3.png)<br>
**2** Добавил кнопку Delete:<br>
![js](https://github.com/aap-m/TI_task_4/blob/main/4.png)<br>
Указал размещение кнопки по центру колонки.<br>
***2.2*** Добавил метод удаления аккаунта по нажатию кнопки detele и всплывающие окна:<br>
![js](https://github.com/aap-m/TI_task_4/blob/main/5.png)<br>
**3** Добавил кнопки edit в столбцы<br>
![js](https://github.com/aap-m/TI_task_4/blob/main/6.png)<br>
***3.1*** Добивил СSS в котором указал изменение кнопки edit за счет opacity:<br>
![css](https://github.com/aap-m/TI_task_4/blob/main/7.png)<br>
***3.2*** Добавил метод редактирования:<br>
![js](https://github.com/aap-m/TI_task_4/blob/main/8.png)<br>
![js](https://github.com/aap-m/TI_task_4/blob/main/9.png)<br>
Блокировку элементов таблицы реализовал через элемент slds-box, который накладывается на таблицу при редактировании ячейки через oncellchange:<br>
![all](https://github.com/aap-m/TI_task_4/blob/main/10.png) <br>
***3.3*** При нажатии кнопки Save происходит обновление данных таблицы убирается slds-box блокирующий редактирование ячеек таблицы:<br>
![js](https://github.com/aap-m/TI_task_4/blob/main/11.png)<br>
**4** ***4.1*** При нажатии на cancel сбрасывается draftValues и убирается slds-box блокирующий редактирование ячеек таблицы:
![js](https://github.com/aap-m/TI_task_4/blob/main/12.png)<br>
***4.2*** Реализуется за счет использования <lightning-datatable>.<br>
***4.4*** Прописаны всплывающие окна по факту успешного или неуспешного редактирования ячеек:<br>
![js](https://github.com/aap-m/TI_task_4/blob/main/13.png)<br>


***Ошибки:***<br>
***1*** Ошибка в написании слова :<br>
![js](https://github.com/aap-m/TI_task_4/blob/main/14.png)<br>
Исправление:<br>
![js](https://github.com/aap-m/TI_task_4/blob/main/15.png)<br>
Описка при написании кода.<br>
***2*** Отсутствует лимит в сокл запросе<br>
![Apex](https://github.com/aap-m/TI_task_4/blob/main/16.png)<br>
Исправление:<br>
![Apex](https://github.com/aap-m/TI_task_4/blob/main/17.png)<br>
Сознательно не ставил лимит на запрос т.к. в песочнице их меньше 15.<br>
***3***	Указал лишний класс:<br>
![css](https://github.com/aap-m/TI_task_4/blob/main/18.png)<br>
Исправление:<br>
![css](https://github.com/aap-m/TI_task_4/blob/main/19.png)<br>
***4***	Отсутствует .cach  в deliteRecord<br>
![js](https://github.com/aap-m/TI_task_4/blob/main/20.png)<br>
Исправление:<br>
![js](https://github.com/aap-m/TI_task_4/blob/main/21.png)<br>
***5***	Сонсоли в коллбэке<br>
![js](https://github.com/aap-m/TI_task_4/blob/main/22.png)<br>
Исправление:<br>
![js](https://github.com/aap-m/TI_task_4/blob/main/23.png)<br>
***6*** Указал в html style:<br>
![html](https://github.com/aap-m/TI_task_4/blob/main/24.png)<br>
Исправление:<br>
![html](https://github.com/aap-m/TI_task_4/blob/main/25.png)<br>
![html](https://github.com/aap-m/TI_task_4/blob/main/26.png)<br>
***7***	Нэйминг<br>
![all](https://github.com/aap-m/TI_task_4/blob/main/27.png)<br>
Исправление:<br>
![all](https://github.com/aap-m/TI_task_4/blob/main/28.png)<br>
