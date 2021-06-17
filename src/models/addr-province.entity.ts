import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("addr_province_pkey", ["id"], { unique: true })
@Entity("addr_province", { schema: "public" })
export class AddrProvince {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "code" })
  code: number;

  @Column("character varying", { name: "name_in_thai", length: 255 })
  nameInThai: string;

  @Column("character varying", { name: "name_in_english", length: 255 })
  nameInEnglish: string;

  @Column("smallint", { name: "zone_id", nullable: true })
  zoneId: number | null;
}
