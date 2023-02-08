import { UpdateMovieDto } from './dto/update-movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { ConfigService } from '@nestjs/config';

@Controller('movies')
export class MoviesController {
  constructor(
    private readonly MoviesService: MoviesService,
    private readonly configService: ConfigService,
  ) {}
  @Get()
  getAll(): Movie[] {
    const chatServerIP = this.configService.get<string>('CHAT_SERVER_IP');
    return this.MoviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    // 원하는 parameter을 @Param 데코레이터를 이용해 받을 수 있음.
    return this.MoviesService.getOne(movieId);
    // const result = {
    //   id: 2,
    //   title: '2000',
    //   year: 2000,
    //   genres: ['2000'],
    // };
    // return result;
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.MoviesService.create(movieData);
  }

  @Delete()
  remove(@Param('id') movieId: number) {
    return this.MoviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.MoviesService.update(movieId, updateData);
  }
}
