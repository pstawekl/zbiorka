# Opis projektu
## Aplikacja dla zbiórki pieniędzy poprzez przelewy

Aplikacja tworzona dla pomocy poszkodowanym przez wojne na Ukrainie. Będzie służyć do zbiórki pieniędzy na konkretne cele, jasno określone w aplikacji.
Pieniądze będą trafiać na konto Stowarzyszenia za pośrednictwem pluginu Przelewy24
Całość informacji wrażliwych będzie przetrzymywana po stronie serwerowej oraz pobierane przez API.
Baza danych musi zostać określona w trakcie prac. Na ten moment wybór jest pomiędzy MSSql, a MariaDB, jako najprostsze i najszybsze bazy w implementacji.
Warstwa backendowa API do komunikacji z serwerem i przekazywania wybranych wrażliwych danych będzie zaprojektowana w środowisku Python.
Aplikacja frontendowa będzie również posiadać CRM dla administratorów strony, umożliwiający monitorowanie wpłat oraz zasięgów, a także dodawanie, edytowanie oraz usuwanie zbiórek pieniędzy.

## Aktualny status prac

Tworzenie wartswy frontendowej, która będzie przygotowana do wpięcia do API.

## Twórcy

Jakub Stawski
Łukasz Soboń

