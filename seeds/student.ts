import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('students').del()

  // Inserts seed entries
  await knex('students').insert([
    {
      id: 1000,
      nisn: '',
      last_name: 'Pundoko',
      first_name: 'Imanuel',
      middle_name: '',
      nickname: '',
      rank_in_family: '',
      citizenship: '',
      age: null,
      place_of_birth: 'Manado',
      date_of_birth: '2024-03-27 16:00:00',
      gender: 'male',
      address: 'Malalayang',
      phone_number: '087850161795',
      email: 'ilomon10@gmail.com',
      previous_school: 'kjnasdaskjand',
      religion: 'christian_protestant',
      status: 'new',
      semester: 'first',
      school_year: '2024/2025',
      registration_number: '123',
      academic_status: 'qweqweqw',
      asother: '',
      family_card_number: '123123123',
      section: 'ES',
      grade: 'G1',
      program: 'national',
      other_program: '',
      transportation: 'school_bus',
      transportation_policy: 'true',
      pick_up_point: 'asdsadsada',
      residence_hall: 'boys_dormitory',
      residence_hall_policy: 'true',
      residence_hall_payment: 'full_payment',
      father_name: '',
      father_occupation: '',
      father_company: 'tagConn',
      father_address: 'Malalayang',
      father_phone_number: '',
      father_email: '',
      mother_name: '',
      mother_occupation: '',
      mother_company: '',
      mother_address: '',
      mother_phone_number: '',
      mother_email: '',
      guardian_name: '',
      guardian_address: '',
      guardian_phone_number: '',
      guardian_relation: '',
      tuition_fee: 'full_payment',
      finance_policy: 'true',
      register_date: '2024-03-28 00:10:16',
      document_approval: '0',
      test_approval: '0',
      account_status: 'inactive',
      profile_image_url: null,
      user_id: null
    }
  ])
}
