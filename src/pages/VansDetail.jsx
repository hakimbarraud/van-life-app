import { Suspense } from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getVans } from "../utils/api";

export function loader({ params }) {
  return defer({ van: getVans(params.id) });
}

const VansDetail = () => {
  const vanPromise = useLoaderData();
  return (
    <div className="px-4 max-w-xl mx-auto">
      <Suspense fallback={<h2 className="text-center">Loading vans...</h2>}>
        <Await resolve={vanPromise.van}>
          {(van) => {
            return (
              <>
                <Link
                  to="../"
                  relative="path"
                  className="hover:text-orange-400 mb-4 inline-block"
                >
                  &larr; Back
                </Link>
                <img src={van.imageUrl} alt={van.name} className="rounded-lg" />
                <p className="bg-orange-400 text-white px-4 py-1 rounded font-semibold inline-block my-4">
                  {van.type}
                </p>
                <p className="font-bold text-2xl">{van.name}</p>
                <p className="text-lg my-2">
                  <span className="font-bold">${van.price}</span>/day
                </p>
                <p>{van.description}</p>
                <button className="bg-orange-400 inline-block w-full p-3 rounded-lg font-bold hover:bg-orange-500 text-lg text-center mt-4 text-white">
                  Rent this van
                </button>
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default VansDetail;
