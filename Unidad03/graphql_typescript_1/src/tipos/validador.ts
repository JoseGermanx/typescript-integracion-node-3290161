import { IsEmail, IsString, IsNumber, IsPostalCode } from "class-validator";
import { Trim } from "class-sanitizer";

export class UsuarioDto {

  @IsString()
  @Trim()
  public nombre?: string;

  @IsEmail({}, { message: "Email no tiene el formato correcto" })
  @Trim()
  public email?: string;

  @IsNumber()
  public edad?: number;

  @IsString()
  public ciudad?: string;

  @IsString()
  public codigoPostal?: string;

  @IsString()
  public telefono?: string;

}