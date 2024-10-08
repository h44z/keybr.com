import { makeKnex } from "@keybr/config";
import { createSchema } from "@keybr/database";
import { clearTables, seedModels } from "@keybr/database/lib/testing/seeds.ts";
import test from "ava";
import { mapEntries } from "./model.ts";

const now = new Date("2001-02-03T04:05:06Z");

test.beforeEach(async () => {
  await createSchema(makeKnex());
  await clearTables();
  await seedModels();
});

test.serial("map entries", async (t) => {
  t.deepEqual(await mapEntries([]), []);

  t.deepEqual(
    await mapEntries([
      {
        user: 1,
        layout: { id: "en-us" } as any,
        timeStamp: now,
        time: 50000,
        length: 100,
        errors: 1,
        complexity: 20,
        speed: 750,
        score: 1000,
      },
      {
        user: 999,
        layout: { id: "en-dvorak" } as any,
        timeStamp: now,
        time: 50000,
        length: 100,
        errors: 1,
        complexity: 20,
        speed: 500,
        score: 500,
      },
    ]),
    [
      {
        user: {
          id: "55vdtk1",
          imageUrl: "imageUrl1",
          name: "externalName1",
          premium: false,
        },
        layout: "en-us",
        speed: 750,
        score: 1000,
      },
      {
        user: null,
        layout: "en-dvorak",
        speed: 500,
        score: 500,
      },
    ],
  );
});