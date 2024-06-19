/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ResumeService } from "../resume.service";
import { ResumeCreateInput } from "./ResumeCreateInput";
import { Resume } from "./Resume";
import { ResumeFindManyArgs } from "./ResumeFindManyArgs";
import { ResumeWhereUniqueInput } from "./ResumeWhereUniqueInput";
import { ResumeUpdateInput } from "./ResumeUpdateInput";

export class ResumeControllerBase {
  constructor(protected readonly service: ResumeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Resume })
  async createResume(@common.Body() data: ResumeCreateInput): Promise<Resume> {
    return await this.service.createResume({
      data: {
        ...data,

        candidate: data.candidate
          ? {
              connect: data.candidate,
            }
          : undefined,
      },
      select: {
        candidate: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        education: true,
        email: true,
        experience: true,
        id: true,
        name: true,
        phone: true,
        skills: true,
        updatedAt: true,
        uploadDate: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Resume] })
  @ApiNestedQuery(ResumeFindManyArgs)
  async resumes(@common.Req() request: Request): Promise<Resume[]> {
    const args = plainToClass(ResumeFindManyArgs, request.query);
    return this.service.resumes({
      ...args,
      select: {
        candidate: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        education: true,
        email: true,
        experience: true,
        id: true,
        name: true,
        phone: true,
        skills: true,
        updatedAt: true,
        uploadDate: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Resume })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async resume(
    @common.Param() params: ResumeWhereUniqueInput
  ): Promise<Resume | null> {
    const result = await this.service.resume({
      where: params,
      select: {
        candidate: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        education: true,
        email: true,
        experience: true,
        id: true,
        name: true,
        phone: true,
        skills: true,
        updatedAt: true,
        uploadDate: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Resume })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateResume(
    @common.Param() params: ResumeWhereUniqueInput,
    @common.Body() data: ResumeUpdateInput
  ): Promise<Resume | null> {
    try {
      return await this.service.updateResume({
        where: params,
        data: {
          ...data,

          candidate: data.candidate
            ? {
                connect: data.candidate,
              }
            : undefined,
        },
        select: {
          candidate: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          education: true,
          email: true,
          experience: true,
          id: true,
          name: true,
          phone: true,
          skills: true,
          updatedAt: true,
          uploadDate: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Resume })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteResume(
    @common.Param() params: ResumeWhereUniqueInput
  ): Promise<Resume | null> {
    try {
      return await this.service.deleteResume({
        where: params,
        select: {
          candidate: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          education: true,
          email: true,
          experience: true,
          id: true,
          name: true,
          phone: true,
          skills: true,
          updatedAt: true,
          uploadDate: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
