import json
import sys

def generate_fixture(input_file, output_file):
    # Read JSON data from input file
    with open(input_file, "r") as file:
        data = json.load(file)

    # Initialize fixture list
    fixture = []

    # Generate fixtures for each device
    device_id = 1
    parameter_id = 1
    for device, entries in data.items():
        fixture.append({
            "model": "monitoring.device",
            "pk": device_id,
            "fields": {
                "title": device
            }
        })
        for entry in entries:
            fixture.append({
                "model": "monitoring.parameter",
                "pk": parameter_id,
                "fields": {
                    "device": device_id,
                    "title": entry["parameter"]
                }
            })
            fixture.append({
                "model": "monitoring.devicedata",
                "fields": {
                    "parameter": parameter_id,
                    "timestamp": entry["timestamp"],
                    "value": entry["value"],
                    "type": entry["type"]
                }
            })
            parameter_id += 1
        device_id += 1

    # Write fixture to output file
    with open(output_file, "w") as f:
        json.dump(fixture, f, indent=4)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python generate_fixture.py <input_filename.json> <output_filename.json>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]
    generate_fixture(input_file, output_file)