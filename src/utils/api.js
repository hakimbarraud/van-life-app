export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : `/api/vans`;
  const response = await fetch(url);
  const data = await response.json();
  return data.vans;
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : `/api/host/vans`;
  const response = await fetch(url);
  const data = await response.json();
  return data.vans;
}
