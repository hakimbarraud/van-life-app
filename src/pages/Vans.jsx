import React, { Suspense } from "react";
import {
  Await,
  Link,
  defer,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import { getVans } from "../utils/api";

export function loader() {
  return defer({ vans: getVans() });
}

const Vans = () => {
  const vansPromise = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  return (
    <div className="px-4">
      <h1 className="text-center font-extrabold text-3xl mb-6">
        Explore our van options
      </h1>
      <Suspense fallback={<h2 className="text-center">Loading vans...</h2>}>
        <Await resolve={vansPromise.vans}>
          {(vans) => {
            const myVans = typeFilter
              ? vans.filter((van) => van.type === typeFilter)
              : vans;
            const displayedVans = myVans.map((van) => (
              <div
                key={van.id}
                className="hover:scale-95 ease-in-out duration-300"
              >
                <Link to={van.id}>
                  <img
                    src={van.imageUrl}
                    alt={van.name}
                    className="rounded-lg"
                  />
                  <div className="flex justify-between my-2">
                    <p className="font-medium">{van.name}</p>
                    <p className="font-bold">${van.price}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="bg-orange-400 text-white px-4 py-1 rounded font-semibold">
                      {van.type}
                    </p>
                    <p className="text-xs">/day</p>
                  </div>
                </Link>
              </div>
            ));
            return (
              <>
                <div className="mb-6">
                  <Link
                    to="?type=simple"
                    className="bg-orange-200 p-2 rounded-md mr-4 hover:shadow-md"
                  >
                    Simple
                  </Link>
                  <Link
                    to="?type=rugged"
                    className="bg-orange-200 p-2 rounded-md mr-4 hover:shadow-md"
                  >
                    Rugged
                  </Link>
                  <Link
                    to="?type=luxury"
                    className="bg-orange-200 p-2 rounded-md mr-4 hover:shadow-md"
                  >
                    Luxury
                  </Link>
                  <Link to="" className="underline hover:opacity-50">
                    Clear filter
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">{displayedVans}</div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default Vans;
