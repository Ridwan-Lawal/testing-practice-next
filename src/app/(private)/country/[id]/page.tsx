import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // use the id to fetch the details of the country you are viewing, and export the name of the country as the title of the page
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>country details: id = {id}</div>;
}
