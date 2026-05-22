"""Functions which helps the locomotive engineer to keep track of the train."""


def get_list_of_wagons(*args):
    """Return a list of wagons, given an arbitrary amount of wagon numbers.

    Parameters:
        An arbitrary number of wagon numbers, unpacked.

    Returns:
        list: A list of wagon numbers.
    """
    *list_of_wagons, = args
    return list_of_wagons


def fix_list_of_wagons(each_wagons_id, missing_wagons):
    """Fix the list of wagons.

    Parameters:
        each_wagons_id (list[int]): The list of wagons.
        missing_wagons (list[int]): The list of missing wagons.

    Returns:
        list[int]: The corrected list of wagons.
    """
    result_array = [1, *missing_wagons, *each_wagons_id[3:], *each_wagons_id[:2]]
    return result_array


def add_missing_stops(route, **kwargs):
    """Add missing stops to route dict.

    Parameters:
        route (dict): The dict of routing information.
        (dict): An arbitrary number of stops.

    Returns:
        dict: The updated route dictionary.
    """
    route["stops"] = [value for key, value in kwargs.items()]
    return route


def extend_route_information(route, more_route_information):
    """Extend route information with more_route_information.

    Parameters:
        route (dict): The route information.
        more_route_information (dict): The extra route information.

    Returns:
        dict: The extended route information.
    """
    whole_route_info = {**route, **more_route_information}
    return whole_route_info


def fix_wagon_depot(wagons_rows):
    """Fix the list of rows of wagons.

    Parameters:
        wagons_rows (list[list[tuple]]): The list of rows of wagons.

    Returns:
        list[list[tuple]]: the list of rows of wagons.
    """
    result_list = []
    x, y, z = zip(*wagons_rows)
    [result_list.append(list(item)) for item in (x,y,z)]
    return result_list
