import { ViewEntity, ViewColumn } from "typeorm";

@ViewEntity({
  expression: `
  SELECT z.id,
    z.name_en AS name,
        CASE
            WHEN (array_agg(p.id))[1] IS NOT NULL THEN json_agg(json_build_object('id', p.id, 'name', p.name_in_english))
            ELSE NULL::json
        END AS provinces
  FROM zone z
    LEFT JOIN addr_province p ON p.zone_id = z.id
  GROUP BY z.id, z.name_en;
  `
})
export class VwZoneProvinceEn {

  @ViewColumn()
  id!: number

  @ViewColumn()
  name!: string

  @ViewColumn()
  provinces!: Array<{
    id: number,
    name: string
  }> | null

}
