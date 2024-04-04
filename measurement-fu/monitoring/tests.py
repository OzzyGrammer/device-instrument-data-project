import os
import graphene
import unittest
from graphene.test import Client
from  schema import schema
from monitoring.models import Device, DeviceData, Parameter
from schema import Query, DeviceType, ParameterType, DeviceDataType

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

class TestGraphQLSchema(unittest.TestCase):
    def setUp(self):
        self.client = Client(schema)

    def test_all_devices_query(self):
        Device.objects.create(name="Device1")
        Device.objects.create(name="Device2")
        query = '''
        query {
            allDevices {
                id
                name
            }
        }
        '''
        expected_result = {
            "data": {
                "allDevices": [
                    {"id": "1", "name": "Device1"},
                    {"id": "2", "name": "Device2"}
                ]
            }
        }
        executed = self.client.execute(query)
        self.assertEqual(executed, expected_result)

    def test_all_parameters_query(self):
        Parameter.objects.create(name="Param1")
        Parameter.objects.create(name="Param2")
        query = '''
        query {
            allParameters {
                id
                name
            }
        }
        '''
        expected_result = {
            "data": {
                "allParameters": [
                    {"id": "1", "name": "Param1"},
                    {"id": "2", "name": "Param2"}
                ]
            }
        }
        executed = self.client.execute(query)
        self.assertEqual(executed, expected_result)

if __name__ == '__main__':
    unittest.main()
