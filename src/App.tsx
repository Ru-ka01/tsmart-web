import { useState, type ChangeEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
// import { cn } from "@/lib/utils";

export default function CompanyBusForm() {
  const [companyInfo, setCompanyInfo] = useState({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
  });

  const [buses, setBuses] = useState([
    {
      plateNumber: "",
      manufacturer: "",
      capacity: "",
      routes: [
        {
          origin: "",
          destination: "",
          price: "",
          depatureTime: "",
          arrivalTime: "",
        },
      ],
    },
  ]);

  const [loading, setLoading] = useState(false);

  const handleCompanyChange = (e: { target: { name: any; value: any } }) => {
    setCompanyInfo({
      ...companyInfo,
      [e.target.name]: e.target.value,
    });
  };

  type BusKey = "plateNumber" | "manufacturer" | "capacity";

  const handleBusChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (["plateNumber", "manufacturer", "capacity"].includes(name)) {
      const updatedBuses = [...buses];
      updatedBuses[index][name as BusKey] = value;
      setBuses(updatedBuses);
    }
  };

  type RouteKey =
    | "origin"
    | "destination"
    | "price"
    | "depatureTime"
    | "arrivalTime";

  const handleRouteChange = (
    busIndex: number,
    routeIndex: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (
      [
        "origin",
        "destination",
        "price",
        "depatureTime",
        "arrivalTime",
      ].includes(name)
    ) {
      const updatedBuses = [...buses];
      updatedBuses[busIndex].routes[routeIndex][name as RouteKey] = value;
      setBuses(updatedBuses);
    }
  };

  const addBus = () => {
    setBuses([
      ...buses,
      {
        plateNumber: "",
        manufacturer: "",
        capacity: "",
        routes: [
          {
            origin: "",
            destination: "",
            price: "",
            depatureTime: "",
            arrivalTime: "",
          },
        ],
      },
    ]);
  };

  const removeBus = (index: number) => {
    const updatedBuses = buses.filter((_, i) => i !== index);
    setBuses(updatedBuses);
  };

  const addRoute = (busIndex: number) => {
    const updatedBuses = [...buses];
    updatedBuses[busIndex].routes.push({
      origin: "",
      destination: "",
      price: "",
      depatureTime: "",
      arrivalTime: "",
    });
    setBuses(updatedBuses);
  };

  const removeRoute = (busIndex: number, routeIndex: number) => {
    const updatedBuses = [...buses];
    updatedBuses[busIndex].routes.splice(routeIndex, 1);
    setBuses(updatedBuses);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...companyInfo,
      buses,
    };

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log(result);
      if (!response.ok) {
        throw new Error(result.error || "Failed to submit data");
      }
      alert("Submitted successfully");
      setCompanyInfo({ companyName: "", companyEmail: "", companyPhone: "" });
      setBuses([
        {
          plateNumber: "",
          manufacturer: "",
          capacity: "",
          routes: [
            {
              origin: "",
              destination: "",
              price: "",
              depatureTime: "",
              arrivalTime: "",
            },
          ],
        },
      ]);
    } catch (err) {
      alert("Error submitting data");
      console.log("payload", payload);
      console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <Card className="w-full max-w-5xl shadow-2xl">
        <CardContent className="p-6 space-y-6">
          <h1 className="text-2xl font-bold text-center">Onboarding Form</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={companyInfo.companyName}
                  onChange={handleCompanyChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="companyEmail">Company Email</Label>
                <Input
                  id="companyEmail"
                  name="companyEmail"
                  type="email"
                  value={companyInfo.companyEmail}
                  onChange={handleCompanyChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="companyPhone">Company Phone</Label>
                <Input
                  id="companyPhone"
                  name="companyPhone"
                  type="tel"
                  value={companyInfo.companyPhone}
                  onChange={handleCompanyChange}
                  required
                />
              </div>
            </div>

            {buses.map((bus, busIndex) => (
              <div
                key={busIndex}
                className="border rounded-lg p-4 space-y-4 bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Bus {busIndex + 1}</h2>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => removeBus(busIndex)}
                    className="text-sm"
                  >
                    Remove Bus
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor={`plateNumber-${busIndex}`}>
                      Plate Number
                    </Label>
                    <Input
                      id={`plateNumber-${busIndex}`}
                      name="plateNumber"
                      value={bus.plateNumber}
                      onChange={(e) => handleBusChange(busIndex, e)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor={`manufacturer-${busIndex}`}>
                      Manufacturer
                    </Label>
                    <Input
                      id={`manufacturer-${busIndex}`}
                      name="manufacturer"
                      value={bus.manufacturer}
                      onChange={(e) => handleBusChange(busIndex, e)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`capacity-${busIndex}`}>
                      Seating Capacity
                    </Label>
                    <Input
                      id={`capacity-${busIndex}`}
                      name="capacity"
                      type="number"
                      value={bus.capacity}
                      onChange={(e) => handleBusChange(busIndex, e)}
                    />
                  </div>
                </div>
                {bus.routes.map((route, routeIndex) => (
                  <div
                    key={routeIndex}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end"
                  >
                    <div>
                      <Label htmlFor={`origin-${busIndex}-${routeIndex}`}>
                        Origin
                      </Label>
                      <Input
                        id={`origin-${busIndex}-${routeIndex}`}
                        name="origin"
                        value={route.origin}
                        onChange={(e) =>
                          handleRouteChange(busIndex, routeIndex, e)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor={`destination-${busIndex}-${routeIndex}`}>
                        Destination
                      </Label>
                      <Input
                        id={`destination-${busIndex}-${routeIndex}`}
                        name="destination"
                        value={route.destination}
                        onChange={(e) =>
                          handleRouteChange(busIndex, routeIndex, e)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor={`price-${busIndex}-${routeIndex}`}>
                        Price
                      </Label>
                      <Input
                        id={`price-${busIndex}-${routeIndex}`}
                        name="price"
                        value={route.price}
                        onChange={(e) =>
                          handleRouteChange(busIndex, routeIndex, e)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor={`depatureTime-${busIndex}-${routeIndex}`}>
                        Depature Time
                      </Label>
                      <Input
                        id={`depatureTime-${busIndex}-${routeIndex}`}
                        name="depatureTime"
                        placeholder="06:00 AM"
                        value={route.depatureTime}
                        onChange={(e) =>
                          handleRouteChange(busIndex, routeIndex, e)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor={`arrivalTime-${busIndex}-${routeIndex}`}>
                        Arrival Time
                      </Label>
                      <Input
                        id={`arrivalTime-${busIndex}-${routeIndex}`}
                        name="arrivalTime"
                        placeholder="10:00 AM"
                        value={route.arrivalTime}
                        onChange={(e) =>
                          handleRouteChange(busIndex, routeIndex, e)
                        }
                        required
                      />
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => removeRoute(busIndex, routeIndex)}
                    >
                      Remove Route
                    </Button>
                  </div>
                ))}
                <Button type="button" onClick={() => addRoute(busIndex)}>
                  + Add Route
                </Button>
              </div>
            ))}

            <div className="flex justify-center">
              <Button type="button" onClick={addBus} variant="secondary">
                + Add Another Bus
              </Button>
            </div>

            <div className="flex justify-center">
              <Button type="submit" disabled={loading} className="w-1/2">
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
