CREATE TABLE `episodes` (
	`id` varchar(128) NOT NULL,
	`serieId` varchar(128) NOT NULL,
	`ordem` int NOT NULL DEFAULT 1,
	`titulo` varchar(512) NOT NULL,
	`youtubeVideoId` varchar(64) NOT NULL,
	`duracao` varchar(32) DEFAULT '1h',
	`descricaoCurta` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `episodes_id` PRIMARY KEY(`id`),
	CONSTRAINT `episodes_youtubeVideoId_unique` UNIQUE(`youtubeVideoId`)
);
--> statement-breakpoint
CREATE TABLE `series` (
	`id` varchar(128) NOT NULL,
	`titulo` varchar(256) NOT NULL,
	`descricao` text,
	`destaque` boolean NOT NULL DEFAULT false,
	`ordem` int NOT NULL DEFAULT 0,
	`ano` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `series_id` PRIMARY KEY(`id`)
);
