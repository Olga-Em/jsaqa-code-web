Feature: Ticket booking

    Scenario: Book ticket VIP
        Given user is on page "https://qamid.tmweb.ru/client/index.php"
        When user selects the desired day
        Then user selects the desired movie
        Then user chooses a location
        Then user is booking tickets
        Then user confirms the booking "Забронировать"

    Scenario: Book two tickets
        Given user is on page "https://qamid.tmweb.ru/client/index.php"
        When user selects the desired day2
        Then user selects the desired movie2
        Then user chooses a location2
        Then user chooses a location3
        Then user is booking tickets
        Then user confirms the booking "Забронировать"

    Scenario: Ticket already booked
        Given user is on page "https://qamid.tmweb.ru/client/index.php"
        When user selects the desired movie3
        Then user chooses a book location
        Then make sure that the Забронировать button is inactive