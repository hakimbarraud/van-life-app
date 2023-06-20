import React, { Suspense } from "react";
import { Await, Link, Outlet, defer, useLoaderData } from "react-router-dom";
import { getHostVans } from "../utils/api";
import MyVansDetailsLayout from "../components/MyVansDetailsLayout";

export function loader({ params }) {
  return defer({ van: getHostVans(params.id) });
}

const MyVansDetails = () => {
  const vanPromise = useLoaderData();
  return (
    <>
      <div className="p-4">
        <Suspense fallback={<h2 className="text-center">Loading vans...</h2>}>
          <Await resolve={vanPromise.van}>
            {(van) => {
              return (
                <div>
                  <Link
                    to=".."
                    relative="path"
                    className="hover:text-orange-400 mb-4 inline-block"
                  >
                    &larr; Back
                  </Link>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center gap-4">
                      <img src={van.imageUrl} className="w-2/6 rounded-md" />
                      <div>
                        <p className="bg-orange-400 text-white px-4 py-1 inline-block rounded font-semibold">
                          {van.type}
                        </p>
                        <p className="font-bold text-lg my-2">{van.name}</p>
                        <p>
                          <span className="font-bold">${van.price}</span>/day
                        </p>
                      </div>
                    </div>
                    <MyVansDetailsLayout />
                    <Outlet context={[van]} />
                  </div>
                </div>
              );
            }}
          </Await>
        </Suspense>
      </div>
    </>
  );
};

export default MyVansDetails;
