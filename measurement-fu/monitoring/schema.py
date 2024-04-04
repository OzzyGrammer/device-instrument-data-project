import graphene
from graphene_django import DjangoObjectType
from monitoring.models import Device, DeviceData, Parameter

class DeviceType(DjangoObjectType):
    """A GraphQL type representing the Device model."""
    class Meta:
        model = Device
        fields = "__all__"

class ParameterType(DjangoObjectType):
    """A GraphQL type representing the Parameter model."""
    class Meta:
        model = Parameter
        fields = "__all__"

class DeviceDataType(DjangoObjectType):
    """A GraphQL type representing the DeviceData model."""
    class Meta:
        model = DeviceData
        fields = "__all__"

class Query(graphene.ObjectType):
    """The root query type for GraphQL queries."""
    all_devices = graphene.List(DeviceType, description="Get all devices.")
    all_parameters = graphene.List(ParameterType, description="Get all parameters.")
    parameter = graphene.Field(ParameterType, id=graphene.Int(), description="Get a parameter by ID.")
    all_devicedata = graphene.List(DeviceDataType, description="Get all device data.")
    parameters_for_device = graphene.List(
        ParameterType, device_id=graphene.Int(), description="Get parameters for a specific device.")
    data_for_device = graphene.List(
        DeviceDataType, device_id=graphene.Int(), description="Get data for a specific device.")
    device_data_detail = graphene.List(
        DeviceDataType, device_data_id=graphene.Int(), description="Get device data detail by ID.")
    limited_devicedata = graphene.List(
        DeviceDataType, limit=graphene.Int(), description="Get limited device data.")

    def resolve_all_devices(self, info):
        """Resolve the 'all_devices' query."""
        return Device.objects.all()

    def resolve_all_parameters(self, info):
        """Resolve the 'all_parameters' query."""
        return Parameter.objects.all()

    def resolve_all_devicedata(self, info):
        """Resolve the 'all_devicedata' query."""
        return DeviceData.objects.all()

    def resolve_parameters_for_device(self, info, device_id):
        """Resolve the 'parameters_for_device' query."""
        return Parameter.objects.filter(device_id=device_id)

    def resolve_parameter(self, info, id):
        """Resolve the 'parameter' query."""
        return Parameter.objects.get(pk=id)

    def resolve_data_for_device(self, info, device_id):
        """Resolve the 'data_for_device' query."""
        return DeviceData.objects.filter(parameter__device_id=device_id)

    def resolve_device_data_detail(self, info, device_data_id):
        """Resolve the 'device_data_detail' query."""
        return DeviceData.objects.filter(id=device_data_id)

    def resolve_limited_devicedata(self, info, limit):
        """Resolve the 'limited_devicedata' query."""
        return DeviceData.objects.all()[:limit]

schema = graphene.Schema(query=Query)
