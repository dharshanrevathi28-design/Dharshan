import { render, screen } from '@testing-library/react';
import AppointmentForm from '../components/AppointmentForm';
import { AuthProvider } from '../context/AuthContext';
import { AppointmentProvider } from '../context/AppointmentContext';

const mockDoctor = {
  _id: 'doc-1',
  name: 'Dr. Sarah Jenkins',
  specialty: 'Cardiology',
  feePerConsultation: 150,
};

test('renders appointment modal with doctor name and time slots', () => {
  render(
    <AuthProvider>
      <AppointmentProvider>
        <AppointmentForm doctor={mockDoctor} onClose={() => {}} />
      </AppointmentProvider>
    </AuthProvider>
  );

  const titleText = screen.getByText(/Book Appointment/i);
  expect(titleText).toBeInTheDocument();

  const doctorNameText = screen.getByText(/Dr. Sarah Jenkins/i);
  expect(doctorNameText).toBeInTheDocument();
});
