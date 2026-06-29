'use client';

import PageRouter from '@/src/components/PageRouter/PageRouter';
import { IPageRouterDto } from '@/src/types/IPageRouterDto';
import { useState } from 'react';
import { FiSmartphone, FiCheckCircle, FiArrowLeft } from 'react-icons/fi';

export default function page() {
  const routes: IPageRouterDto[] = [{ link: 'login', title: 'ورود به سایت' }];
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [step, setStep] = useState<'phone' | 'code'>('phone');
  const [loading, setLoading] = useState(false);

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length === 11) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep('code');
      }, 1500);
    }
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      const next = document.getElementById(`code-${index + 1}`);
      if (next) next.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.every(c => c !== '')) {
      alert('✅ ورود موفق!');
    }
  };

  return (
    <>
      <PageRouter routs={routes} />
      <div className="container mx-auto flex justify-center items-center min-h-[70vh] px-4">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">

          <div className="text-center space-y-2 mb-8">
            {step === 'phone' ? (
              <>
                <div className="text-4xl mb-4">📱</div>
                <h1 className="text-xl font-bold text-gray-800">ورود با شماره موبایل</h1>
                <p className="text-sm text-gray-500">کد تایید به شماره شما ارسال می‌شود</p>
              </>
            ) : (
              <>
                <button
                  onClick={() => setStep('phone')}
                  className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <FiArrowLeft size={20} className="text-gray-500" />
                </button>
                <div className="text-4xl mb-4">✉️</div>
                <h1 className="text-xl font-bold text-gray-800">کد تایید</h1>
                <p className="text-sm text-gray-500">
                  کد ارسال شده به <span className="text-blue-600 font-bold">{phone}</span> را وارد کنید
                </p>
              </>
            )}
          </div>

          {step === 'phone' ? (
            <form onSubmit={handleSendCode} className="space-y-6">
              <div className="relative">
                <FiSmartphone className="absolute right-4 top-3.5 text-gray-400" size={20} />
                <input
                  type="tel"
                  maxLength={11}
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  className="w-full pr-12 pl-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 transition-colors text-center"
                  dir="ltr"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={phone.length !== 11 || loading}
                className={`w-full py-3 rounded-lg font-bold transition-colors ${phone.length === 11 && !loading
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
              >
                {loading ? '⏳ در حال ارسال...' : 'ارسال کد تایید'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="flex justify-center gap-3">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    className="w-12 h-14 text-center text-xl font-bold bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500 transition-colors"
                    dir="ltr"
                    autoFocus={index === 0}
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={code.some(c => c === '')}
                className={`w-full py-3 rounded-lg font-bold transition-colors ${code.every(c => c !== '')
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
              >
                <FiCheckCircle className="inline ml-2" size={18} />
                تایید و ورود
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setStep('phone')}
                  className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  تغییر شماره موبایل
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 text-center text-xs text-gray-400">
            با ورود شما، <span className="text-blue-600">قوانین و مقررات</span> را پذیرفته‌اید
          </div>
        </div>
      </div>
    </>
  );
}