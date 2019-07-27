import * as React from "react";
import { Column, Filter } from "react-table";
import { IColumnVisibility } from "../../../interfaces";
import { SubscribeButtonGroup } from "../../linkButtons";

export const SubscribeButton = (columnVisibility: IColumnVisibility[]) => ({
    Header: <span title={`Subscribe to the list with a browser extension supporting the "abp:" protocol (e.g. uBlock Origin, Adblock Plus)`}>
                Subscribe
            </span>,
    accessor: "viewUrl",
    filterable: true,
    filterMethod: (f: Filter, r: any[]) => filterMethod(f, r),
    sortMethod: (a: string, b: string) => sortMethod(a, b),
    Cell: (c: any) => <SubscribeButtonGroup name={c.row.name} url={c.value} urlMirrors={c.row.viewUrlMirrors}/>,
    style: { textAlign: "center" },
    width: 110,
    show: columnVisibility.filter((c: IColumnVisibility) => c.column === "Subscribe")[0].visible
} as Column);

const filterMethod = (f: Filter, r: any[]): boolean =>
    r[f.id as any].toUpperCase().includes(f.value.toUpperCase());

const sortMethod = (a: string, b: string) =>
    a.toLowerCase() > b.toLowerCase() ? 1 : -1;