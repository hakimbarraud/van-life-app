import React, { Suspense } from "react";
import { getHostVans } from "../utils/api";
import { Await, Link, defer, useLoaderData } from "react-router-dom";

export function loader() {
  return defer({ vans: getHostVans() });
}

const MyVans = () => {
  const vansPromise = useLoaderData();
  return (
    <section>
      <h2 className="text-center font-extrabold text-3xl my-6 ">
        Your listed vans
      </h2>
      <Suspense fallback={<h2 className="text-center">Loading vans...</h2>}>
        <Await resolve={vansPromise.vans}>
          {(vans) => {
            const vansEl = vans.map((van) => (
              <Link
                to={van.id}
                key={van.id}
                className="mx-4 p-4 rounded-lg flex items-center gap-4 mb-4 bg-white hover:scale-95 ease-in-out duration-300"
              >
                <img
                  src={van.imageUrl}
                  alt={van.name}
                  className="w-1/6 rounded"
                />
                <div>
                  <p className="font-bold text-lg">{van.name}</p>
                  <p>${van.price}/day</p>
                </div>
              </Link>
            ));
            return <div>{vansEl}</div>;
          }}
        </Await>
      </Suspense>
    </section>
  );
};

export default MyVans;
