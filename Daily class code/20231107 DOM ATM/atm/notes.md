1.  ATM machine screen
    <!-- 2. multiple users : {username, account number} -->
    <!-- 3. date implementation -->
2.  Screen design --- Done
3.  all Button click functions
4.  default amount value and default pin
5.  change pin

    # Disable ATM menus

    # Show Pin change input section

    # enter old pin

    # validate pin

        |- if true --> Show 2nd input to enter new pin
        |          |-  if new pin entered -
        |               |_ show success msg
        |
        |- else   ---> Show error message

6.  Withdraw amount
    |_ balance check --- input amount < existed amount 18000 < 10000
    |_ balance show
