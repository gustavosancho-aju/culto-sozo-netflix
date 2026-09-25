CREATE TYPE "public"."sync_action" AS ENUM('new_episode', 'new_series', 'none');--> statement-breakpoint
CREATE TYPE "public"."sync_status" AS ENUM('success', 'error', 'no_new_videos');--> statement-breakpoint
CREATE TYPE "public"."testimonial_status" AS ENUM('pending', 'approved', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."user_role" AS ENUM('user', 'admin');--> statement-breakpoint
CREATE TABLE "episodes" (
	"id" varchar(128) PRIMARY KEY NOT NULL,
	"serieId" varchar(128) NOT NULL,
	"ordem" integer DEFAULT 1 NOT NULL,
	"titulo" varchar(512) NOT NULL,
	"youtubeVideoId" varchar(64) NOT NULL,
	"duracao" varchar(32) DEFAULT '1h',
	"descricaoCurta" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "episodes_youtubeVideoId_unique" UNIQUE("youtubeVideoId")
);
--> statement-breakpoint
CREATE TABLE "series" (
	"id" varchar(128) PRIMARY KEY NOT NULL,
	"titulo" varchar(256) NOT NULL,
	"descricao" text,
	"destaque" boolean DEFAULT false NOT NULL,
	"ordem" integer DEFAULT 0 NOT NULL,
	"ano" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sync_config" (
	"id" serial PRIMARY KEY NOT NULL,
	"channelUrl" varchar(256) NOT NULL,
	"channelId" varchar(128),
	"enabled" boolean DEFAULT true NOT NULL,
	"lastSyncAt" timestamp,
	"lastVideoId" varchar(64),
	"scheduleCronTaskUid" varchar(65),
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sync_history" (
	"id" serial PRIMARY KEY NOT NULL,
	"executedAt" timestamp DEFAULT now() NOT NULL,
	"status" "sync_status" NOT NULL,
	"videoId" varchar(64),
	"videoTitle" text,
	"videoDescription" text,
	"action" "sync_action",
	"seriesId" varchar(128),
	"seriesTitle" text,
	"episodeOrder" integer,
	"errorMessage" text,
	"details" text
);
--> statement-breakpoint
CREATE TABLE "testimonial_likes" (
	"id" serial PRIMARY KEY NOT NULL,
	"testimonialId" integer NOT NULL,
	"visitorHash" varchar(64) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "testimonials" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"authorName" varchar(128),
	"authorCity" varchar(128),
	"linkedEpisodeId" varchar(64),
	"linkedEpisodeTitle" text,
	"status" "testimonial_status" DEFAULT 'pending' NOT NULL,
	"adminNote" text,
	"likesCount" integer DEFAULT 0 NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"approvedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"openId" varchar(64) NOT NULL,
	"name" text,
	"email" varchar(320),
	"loginMethod" varchar(64),
	"role" "user_role" DEFAULT 'user' NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"lastSignedIn" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_openId_unique" UNIQUE("openId")
);
