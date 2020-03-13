import mockAxios from "axios";
import fetchJSONPlaceholder from "../fetchJSONPlaceholder";

const fakeUserList = [
  { id: 255, name: "Malcolm Kente", email: "malcolm.kente@remrkabledev.com" },
  { id: 80, name: "Kendrick Lamar", email: "k.dot@compton.com" },
  { id: 444, name: "Shawn Carter", email: "hova@rocnation.com" }
];

test("calling axios and returning data", async () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({ data: fakeUserList })
  );

  const apiData = await fetchJSONPlaceholder();

  expect(apiData).toEqual(fakeUserList);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/users/"
  );
});
