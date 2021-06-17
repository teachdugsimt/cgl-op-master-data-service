import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("addr_subdistrict_pkey", ["id"], { unique: true })
@Entity("addr_subdistrict", { schema: "public" })
export class AddrSubdistrict {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name_in_thai", length: 255 })
  nameInThai: string;

  @Column("character varying", {
    name: "name_in_english",
    nullable: true,
    length: 255,
  })
  nameInEnglish: string | null;

  @Column("real", { name: "latitude", nullable: true, precision: 24 })
  latitude: number | null;

  @Column("real", { name: "longitude", nullable: true, precision: 24 })
  longitude: number | null;

  @Column("integer", { name: "district_id" })
  districtId: number;

  @Column("character varying", { name: "zip_code", nullable: true, length: 10 })
  zipCode: string | null;
}
