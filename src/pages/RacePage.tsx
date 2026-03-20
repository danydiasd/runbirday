import { useMemo, useState, type FormEvent } from 'react';
import { FieldWrapper, SelectInput, TextAreaInput, TextInput } from '../components/FormField';
import { FormLayout } from '../layouts/FormLayout';
import type { RaceLoginData, RaceRegistrationFormData } from '../types';
import { raceDistances, shirtSizes } from '../types';

type RegisteredRunner = RaceRegistrationFormData & {
  id: number;
  generatedPassword: string;
};

const adminAccess = {
  email: 'admin@runbirday.local',
  password: 'admin35',
};

export function RacePage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [loginData, setLoginData] = useState<RaceLoginData>({
    email: '',
    password: '',
    profile: 'inscrito',
  });
  const [registrationData, setRegistrationData] = useState<RaceRegistrationFormData>({
    name: '',
    birthDate: '',
    shirtSize: 'M',
    distance: '5km',
    allergies: '',
    bloodType: '',
  });
  const [registeredRunner, setRegisteredRunner] = useState<RegisteredRunner | null>(null);
  const [loginMessage, setLoginMessage] = useState<string>('');

  const nextId = useMemo(() => {
    if (registeredRunner) {
      return registeredRunner.id + 1;
    }

    return 101;
  }, [registeredRunner]);

  const updateLoginField = (field: keyof RaceLoginData, value: string) => {
    setLoginData((current) => ({ ...current, [field]: value as RaceLoginData[keyof RaceLoginData] }));
  };

  const updateRegistrationField = (field: keyof RaceRegistrationFormData, value: string) => {
    setRegistrationData((current) => ({ ...current, [field]: value as RaceRegistrationFormData[keyof RaceRegistrationFormData] }));
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      loginData.profile === 'administrador' &&
      loginData.email === adminAccess.email &&
      loginData.password === adminAccess.password
    ) {
      setLoginMessage('Acesso administrativo liberado no protótipo. Em produção, autentique via API segura e sessão persistida.');
      return;
    }

    if (
      loginData.profile === 'inscrito' &&
      registeredRunner &&
      loginData.email.toLowerCase() === `${registeredRunner.name.toLowerCase().replace(/\s+/g, '.')}@runbirday.local` &&
      loginData.password === registeredRunner.generatedPassword
    ) {
      setLoginMessage('Login do inscrito validado localmente. Próximo passo: consultar usuário real no MariaDB.');
      return;
    }

    setLoginMessage('Credenciais não encontradas neste protótipo. Cadastre um inscrito ou use o acesso administrador de demonstração.');
  };

  const handleRegistration = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const generatedPassword = `${registrationData.birthDate.replaceAll('-', '')}${nextId}`;
    setRegisteredRunner({
      ...registrationData,
      id: nextId,
      generatedPassword,
    });
    setMode('login');
    setLoginData({
      email: `${registrationData.name.toLowerCase().trim().replace(/\s+/g, '.')}@runbirday.local`,
      password: generatedPassword,
      profile: 'inscrito',
    });
    setLoginMessage('Inscrição criada localmente. Use as credenciais sugeridas abaixo para testar o login do inscrito.');
  };

  return (
    <FormLayout
      eyebrow="Corrida 35 - Em Movimento"
      title="Login e inscrição para atletas e administração"
      description="Este fluxo diferencia inscritos e administrador, já modelando os campos pedidos para a corrida e a regra de senha padrão baseada em data de nascimento + ID de criação."
    >
      <div className="mb-8 flex flex-wrap gap-3">
        <button
          type="button"
          className={mode === 'login' ? 'cta-button' : 'secondary-button'}
          onClick={() => setMode('login')}
        >
          Login
        </button>
        <button
          type="button"
          className={mode === 'register' ? 'cta-button' : 'secondary-button'}
          onClick={() => setMode('register')}
        >
          Novo inscrito
        </button>
      </div>

      {mode === 'login' ? (
        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="grid gap-5 md:grid-cols-2">
            <FieldWrapper label="Perfil">
              <SelectInput
                value={loginData.profile}
                onChange={(event) => updateLoginField('profile', event.target.value)}
              >
                <option value="inscrito">Inscrito</option>
                <option value="administrador">Administrador</option>
              </SelectInput>
            </FieldWrapper>
            <FieldWrapper label="Login / E-mail" hint="Para o protótipo do inscrito, use o e-mail gerado automaticamente após o cadastro.">
              <TextInput
                required
                type="email"
                placeholder="atleta@runbirday.local"
                value={loginData.email}
                onChange={(event) => updateLoginField('email', event.target.value)}
              />
            </FieldWrapper>
          </div>
          <FieldWrapper label="Senha" hint="Administrador demo: admin@runbirday.local / admin35">
            <TextInput
              required
              type="password"
              placeholder="Digite sua senha"
              value={loginData.password}
              onChange={(event) => updateLoginField('password', event.target.value)}
            />
          </FieldWrapper>
          <button type="submit" className="cta-button w-full">
            Entrar
          </button>
          {loginMessage ? (
            <div className="rounded-[1.75rem] border border-brand-200 bg-brand-50 p-5 text-sm leading-7 text-brand-800">
              {loginMessage}
            </div>
          ) : null}
          {registeredRunner ? (
            <div className="rounded-[1.75rem] border border-sunset-200 bg-sunset-100/60 p-5 text-sm leading-7 text-brand-900">
              <strong>Último inscrito:</strong> {registeredRunner.name} · login sugerido:{' '}
              {`${registeredRunner.name.toLowerCase().replace(/\s+/g, '.')}@runbirday.local`} · senha padrão:{' '}
              {registeredRunner.generatedPassword}
            </div>
          ) : null}
        </form>
      ) : (
        <form className="space-y-6" onSubmit={handleRegistration}>
          <div className="grid gap-5 md:grid-cols-2">
            <FieldWrapper label="Nome" hint="Máximo de 120 caracteres.">
              <TextInput
                required
                maxLength={120}
                value={registrationData.name}
                onChange={(event) => updateRegistrationField('name', event.target.value)}
              />
            </FieldWrapper>
            <FieldWrapper label="Data de nascimento">
              <TextInput
                required
                type="date"
                value={registrationData.birthDate}
                onChange={(event) => updateRegistrationField('birthDate', event.target.value)}
              />
            </FieldWrapper>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <FieldWrapper label="Número da blusa">
              <SelectInput
                value={registrationData.shirtSize}
                onChange={(event) => updateRegistrationField('shirtSize', event.target.value)}
              >
                {shirtSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </SelectInput>
            </FieldWrapper>
            <FieldWrapper label="KM">
              <SelectInput
                value={registrationData.distance}
                onChange={(event) => updateRegistrationField('distance', event.target.value)}
              >
                {raceDistances.map((distance) => (
                  <option key={distance} value={distance}>
                    {distance}
                  </option>
                ))}
              </SelectInput>
            </FieldWrapper>
            <FieldWrapper label="Tipo sanguíneo" hint="Até 8 caracteres.">
              <TextInput
                required
                maxLength={8}
                placeholder="O+"
                value={registrationData.bloodType}
                onChange={(event) => updateRegistrationField('bloodType', event.target.value.toUpperCase())}
              />
            </FieldWrapper>
          </div>
          <FieldWrapper label="Alergias" hint="Máximo de 100 caracteres.">
            <TextAreaInput
              maxLength={100}
              placeholder="Informe restrições relevantes para a prova"
              value={registrationData.allergies}
              onChange={(event) => updateRegistrationField('allergies', event.target.value)}
            />
          </FieldWrapper>
          <div className="rounded-[1.75rem] border border-brand-200 bg-brand-50 p-5 text-sm leading-7 text-brand-700">
            A senha padrão será gerada com a data de nascimento no formato AAAAMMDD + ID de criação do usuário. Exemplo: 19910423101.
          </div>
          <button type="submit" className="cta-button w-full">
            Criar inscrição
          </button>
        </form>
      )}
    </FormLayout>
  );
}
