import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("addr_district_pkey", ["id"], { unique: true })
@Entity("addr_district", { schema: "public" })
export class AddrDistrict {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "code" })
  code: number;

  @Column("character varying", { name: "name_in_thai", length: 255 })
  nameInThai: string;

  @Column("character varying", { name: "name_in_english", length: 255 })
  nameInEnglish: string;

  @Column("integer", { name: "province_id" })
  provinceId: number;
}
