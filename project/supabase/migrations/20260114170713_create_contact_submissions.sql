/*
  # Contact Form Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting the form
      - `email` (text) - Email address
      - `phone` (text) - Phone number
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Status of the inquiry (new, reviewed, responded)

  2. Security
    - Enable RLS on `contact_submissions` table
    - No public read access (admin-only via service role)
    - Allow public insert (anyone can submit contact form)

  3. Important Notes
    - This table stores contact form submissions for the Najm Air website
    - Public users can only insert data (submit forms)
    - Reading submissions requires authentication (admin access)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
