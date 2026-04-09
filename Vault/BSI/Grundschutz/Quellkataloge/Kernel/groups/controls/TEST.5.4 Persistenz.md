---
class: BSI-Stand-der-Technik-Kernel
type: control
control: TEST.5.4 Persistenz
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# TEST.5.4 - Persistenz
Gruppe: [TEST.5 Bereitstellung](BSI/Grundschutz/Quellkataloge/Kernel/groups/TEST.5%20Bereitstellung.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Änderungen und Tests (TEST)](BSI/Grundschutz/Quellkataloge/Kernel/groups/TEST%20Änderungen%20und%20Tests.md)**<br> ***  &rarr; [Bereitstellung](BSI/Grundschutz/Quellkataloge/Kernel/groups/TEST.5%20Bereitstellung.md) *** |  | SOLLTE | die Persistenz | nach wesentlichen Änderungen | testen | Konfigurationshistorie | >Änderungen und Tests SOLLTE die Persistenz nach wesentlichen Änderungen testen.

> [!info]- Guidance
>Persistenz bedeutet hier, dass eine wesentliche Änderung nach ihrer Einführung dauerhaft wirksam bleibt, also auch nach einem Neustart, einem System-Update oder einem Rückspielen von Konfigurations-Backups nicht unbeabsichtigt verloren geht. Dies könnte beispielsweise dazu führen, dass eine sicherheitsrelevante Konfiguration nach einem Reboot verschwindet oder eine Migration zu einem neuen Anbieter scheitert, weil Daten oder Regeln nicht portabel waren. Eine Institution kann die Anforderung praktisch umsetzen, indem Änderungen nach Abschluss nicht nur funktional, sondern auch über System- und Lebenszyklusereignisse hinweg überprüft werden. Dazu kann es hilfreich sein, Änderungen gezielt mit simulierten Neustarts, Failover-Tests oder dem erneuten Einspielen von Standard-Backups zu validieren. Um den laufenden Betrieb hierdurch nicht zu beeinträchtigen können Systeme oder Anwendungsinstanzen nacheinander oder zu unkritischen Zeiten neu gestartet werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 09606d16-376b-44be-b12e-35829f10d4e4 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 09606d16-376b-44be-b12e-35829f10d4e4 |
