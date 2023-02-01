import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie  made after: ${searchingYear}`;
  }
  // search가 get id 보다 아래에 있으면 get id를 먼저 인식 하므로 위에 해줌.

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    // 원하는 parameter을 @Param 데코레이터를 이용해 받을 수 있음.
    return `This will return one movie with the id ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete()
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
