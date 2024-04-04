import graphene

import monitoring.schema


class Query(monitoring.schema.Query, graphene.ObjectType):
    # Combine the queries from different apps
    pass

schema = graphene.Schema(query=Query)