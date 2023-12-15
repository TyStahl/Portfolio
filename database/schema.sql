-- Project myPortfolio {
--   databaseType: 'PosgreSQL'
--   Note: 'A personal portfolio for Tyler Stahl'
-- }

set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";


CREATE TABLE "projects" (
  "projectId" serial primary key,
  "name" text not null,
  "imageUrl" text not null,
  "githubUrl" text not null,
  "domainUrl" text not null
);
