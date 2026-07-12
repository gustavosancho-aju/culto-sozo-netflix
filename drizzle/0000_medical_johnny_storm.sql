CREATE TABLE `sync_config` (
	`id` int AUTO_INCREMENT NOT NULL,
	`channelUrl` varchar(256) NOT NULL,
	`channelId` varchar(128),
	`enabled` boolean NOT NULL DEFAULT true,
	`lastSyncAt` timestamp,
	`lastVideoId` varchar(64),
	`scheduleCronTaskUid` varchar(65),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `sync_config_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `sync_history` (
	`id` int AUTO_INCREMENT NOT NULL,
	`executedAt` timestamp NOT NULL DEFAULT (now()),
	`status` enum('success','error','no_new_videos') NOT NULL,
	`videoId` varchar(64),
	`videoTitle` text,
	`videoDescription` text,
	`action` enum('new_episode','new_series','none'),
	`seriesId` varchar(128),
	`seriesTitle` text,
	`episodeOrder` int,
	`errorMessage` text,
	`details` text,
	CONSTRAINT `sync_history_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`openId` varchar(64) NOT NULL,
	`name` text,
	`email` varchar(320),
	`loginMethod` varchar(64),
	`role` enum('user','admin') NOT NULL DEFAULT 'user',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`lastSignedIn` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_openId_unique` UNIQUE(`openId`)
);
