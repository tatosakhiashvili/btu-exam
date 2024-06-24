import { IsString, Length } from 'class-validator';

export class UpdateNewsDto {
    @IsString()
    @Length(1)
    title: string;

    @IsString()
    @Length(1)
    description: string;

    @IsString()
    @Length(1)
    category: string;

    @IsString()
    @Length(1)
    editorFirstName: string;

    @IsString()
    @Length(1)
    editorLastName: string;
}

export class CreateNewsDto {
    @IsString()
    @Length(1)
    title: string;

    @IsString()
    @Length(1)
    description: string;

    @IsString()
    @Length(1)
    category: string;

    @IsString()
    @Length(1)
    editorFirstName: string;

    @IsString()
    @Length(1)
    editorLastName: string;
}