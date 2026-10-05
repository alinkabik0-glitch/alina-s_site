import { useState, useDeferredValue } from 'react';
import styles from './LecturersList.module.css';
import LecturerCard from '../LecturerCard/LecturerCard';
import { lecturersData } from '../../data/lecturersData';

interface LecturersListProps {
  onNavigate: (page: string, lecturerId: number) => void;
}

export default function LecturersList({ onNavigate }: LecturersListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'experience' | 'degree'>('name');
  const [minExperience, setMinExperience] = useState<number>(0);

  // useDeferredValue откладывает обновление этого значения,
  // чтобы ввод в поле поиска не «лагал» при большом списке (100+ элементов).
  // Пока React занят перерисовкой списка — input остаётся отзывчивым.
  const deferredSearchTerm = useDeferredValue(searchTerm);

  // isStale = true, когда введённый текст ещё не «догнал» отложенное значение.
  // Это значит: список сейчас перерисовывается под старые данные.
  const isStale = searchTerm !== deferredSearchTerm;

  const filteredLecturers = lecturersData
    .filter(lecturer => {
      // Фильтрация идёт по ОТЛОЖЕННОМУ значению, а не по searchTerm.
      // Так React может отрисовать список чуть позже, не блокируя ввод.
      const matchesSearch = lecturer.fullName
        .toLowerCase()
        .includes(deferredSearchTerm.toLowerCase());
      const experience = parseInt(lecturer.experience);
      const matchesExperience = experience >= minExperience;

      return matchesSearch && matchesExperience;
    })
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.fullName.localeCompare(b.fullName);
      } else if (sortBy === 'experience') {
        return parseInt(b.experience) - parseInt(a.experience);
      } else if (sortBy === 'degree') {
        return a.degree.localeCompare(b.degree);
      }
      return 0;
    });

  return (
    <div className={styles.lecturersList}>
      <div className={styles.filters}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Поиск по ФИО..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          {/* Индикатор устаревших результатов: показывается, пока список отстаёт от ввода */}
          {isStale && (
            <span className={styles.staleIndicator}>Обновление…</span>
          )}
        </div>

        <div className={styles.filterControls}>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className={styles.select}
          >
            <option value="name">Сортировать по имени</option>
            <option value="experience">Сортировать по стажу</option>
            <option value="degree">Сортировать по степени</option>
          </select>

          <select
            value={minExperience}
            onChange={(e) => setMinExperience(Number(e.target.value))}
            className={styles.select}
          >
            <option value={0}>Любой стаж</option>
            <option value={5}>От 5 лет</option>
            <option value={10}>От 10 лет</option>
            <option value={15}>От 15 лет</option>
          </select>
        </div>
      </div>

      {/* Пока идёт обновление (isStale) — список становится полупрозрачным.
          Это визуально показывает, что данные ещё не финальные.
          Старый список не исчезает мгновенно — просто тускнеет. */}
      <div
        className={styles.lecturersGrid}
        style={{ opacity: isStale ? 0.6 : 1, transition: 'opacity 0.2s' }}
      >
        {filteredLecturers.map(lecturer => (
          <LecturerCard
            key={lecturer.id}
            lecturer={lecturer}
            onClick={() => onNavigate('lecturer', lecturer.id)}
          />
        ))}
      </div>

      {filteredLecturers.length === 0 && (
        <div className={styles.noResults}>
          <p>Лекторы не найдены</p>
        </div>
      )}
    </div>
  );
}