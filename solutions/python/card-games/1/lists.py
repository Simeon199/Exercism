"""Functions for tracking poker hands and assorted card tasks.

Python list documentation: https://docs.python.org/3/tutorial/datastructures.html
"""


def get_rounds(number):
    """Create a list containing the current and next two round numbers.

    :param number: int - current round number.
    :return: list - current round and the two that follow.
    """

    return list((number, number+1, number+2))


def concatenate_rounds(rounds_1, rounds_2):
    """Concatenate two lists of round numbers.

    :param rounds_1: list - first rounds played.
    :param rounds_2: list - second set of rounds played.
    :return: list - all rounds played.
    """

    return rounds_1 + rounds_2


def list_contains_round(rounds, number):
    """Check if the list of rounds contains the specified number.

    :param rounds: list - rounds played.
    :param number: int - round number.
    :return: bool - was the round played?
    """

    for item in rounds:
        if item == number:
            return True
    return False


def card_average(hand):
    """Calculate and returns the average card value from the list.

    :param hand: list - cards in hand.
    :return: float - average value of the cards in the hand.
    """

    card_average = sum(hand) / len(hand)
    return card_average


def approx_average_is_average(hand):
    """Return if the (average of first and last card values) OR ('middle' card) == calculated average.

    :param hand: list - cards in hand.
    :return: bool - does one of the approximate averages equal the `true average`?
    """

    calculated_average = card_average(hand)
    median = round(len(hand) / 2)
    average_of_first_and_last_card = (hand[0] + hand[len(hand)-1]) / 2
    if calculated_average == hand[median] or calculated_average == average_of_first_and_last_card:
        return True
    return False


def average_even_is_average_odd(hand):
    """Return if the (average of even indexed card values) == (average of odd indexed card values).

    :param hand: list - cards in hand.
    :return: bool - are even and odd averages equal?
    """

    index = 0
    odd_values = []
    even_values = []
    for item in hand:
        if index % 2 == 0:
            even_values.append(item)
        else:
            odd_values.append(item)
        index += 1
    if card_average(even_values) == card_average(odd_values):
        return True
    return False
    
            


def maybe_double_last(hand):
    """Multiply a Jack card value in the last index position by 2.

    :param hand: list - cards in hand.
    :return: list - hand with Jacks (if present) value doubled.
    """

    last_index = len(hand) - 1
    if(hand[last_index] == 11):
        hand[last_index] = 22
    return hand
