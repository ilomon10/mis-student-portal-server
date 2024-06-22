import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('site-config').del()

  // Inserts seed entries
  await knex('site-config').insert([
    {
      id: 1000,
      name: 'student-document-template',
      value: 'https://ik.imagekit.io/c2rr9aewn/Application%20Form%20MIS%20(6).docx?updatedAt=1714631341171'
    },
    {
      id: 1001,
      name: 'student-ecp-id-card-template',
      value: '{}'
    },
    {
      id: 1002,
      name: 'student-es-id-card-template',
      value: '{}'
    },
    {
      id: 1003,
      name: 'student-ms-id-card-template',
      value: '{}'
    },
    {
      id: 1004,
      name: 'student-hs-id-card-template',
      value: '{}'
    }
  ])
}
