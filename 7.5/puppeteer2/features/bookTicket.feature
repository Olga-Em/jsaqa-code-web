Feature: Ticket booking

    Scenario: Should book ticket
        Given user is on page "https://qamid.tmweb.ru/client/index.php"
        When user selects the desired day
        Then user selects the desired movie
        Then user chooses a location
        Then user is booking tickets
        Then user confirms the booking "Забронировать"