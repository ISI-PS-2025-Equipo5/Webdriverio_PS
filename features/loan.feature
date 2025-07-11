Feature: Parabank loan Feature

Background:
    Given I am on the login page
    When I login with john and demo

    Scenario: Solicitud de restamo exitoso
        Given yo estoy en la pagina Request loan
        When yo ingreso la cantidad a prestar <LoanAmount> and deposito <DownPayment>
        Then el sistema muestra un mensaje de éxito del prestamo
