---
tags:
- Produktbeschreibung
- konf77-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.7.7 Regelmäßiger Funktionstest
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.7.7 - Regelmäßiger Funktionstest
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.7 Schutz vor Schadcode](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.7%20Schutz%20vor%20Schadcode.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Schutz vor Schadcode](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.7%20Schutz%20vor%20Schadcode.md) *** | IT-Systeme | KANN | die Funktionsfähigkeit des Schadcodeschutzes | {{regelmäßig}} | überprüfen | Konfigurationshistorie | >Konfiguration für IT-Systeme KANN die Funktionsfähigkeit des Schadcodeschutzes {{ insert: param, konf.7.7-prm1 }} überprüfen.

> [!info]- Guidance
>Die Funktionsfähigkeit des Schadcodeschutzes beschreibt den operativen Zustand der eingesetzten Schutzmechanismen (engl. Malware Protection, oft auch Antivirus oder Endpoint Detection and Response, kurz EDR), der über die reine Installation der Software hinausgeht. Sie umfasst die korrekte Ausführung der Schutzdienste, die Aktualität der Erkennungssignaturen und Verhaltensregeln sowie die Fähigkeit, auf Bedrohungen aktiv zu reagieren und diese zu protokollieren. Eine regelmäßige Überprüfung dieser Funktionsfähigkeit kann die Institution vor unbemerkten Sicherheitslücken schützen. Ein deaktivierter oder fehlerhafter Schutzmechanismus könnte beispielsweise dazu führen, dass Ransomware unbemerkt Daten verschlüsselt oder ein Trojaner Anmeldeinformationen abgreift, obwohl eine Schutzsoftware installiert ist. Durch die proaktive Verifikation kann hingegen sichergestellt werden, dass diese wesentliche Verteidigungslinie durchgehend intakt ist und auf Angriffsversuche reagieren kann. Zur konkreten Umsetzung kann die Institution auf verschiedene, sich ergänzende Maßnahmen zurückgreifen. Eine zentrale Verwaltungskonsole der eingesetzten Schutzlösung kann genutzt werden, um den Status aller angebundenen Systeme automatisiert zu überwachen und Alarme auszulösen, wenn Systeme sich nicht mehr melden, veraltete Signaturen aufweisen oder Dienste beendet wurden. Ergänzend kann die tatsächliche Erkennungsleistung proaktiv durch den Einsatz einer standardisierten Testdatei wie dem EICAR-Teststring verifiziert werden; dieser kann automatisiert auf den Systemen platziert werden, um zu prüfen, ob der Schadcodeschutz wie erwartet anschlägt und eine Meldung generiert. Auf Systemen ohne zentrale Anbindung kann die Funktionsfähigkeit mittels Skripten überprüft werden, die lokal den Dienststatus und das Alter der Signaturdateien auslesen und in einer überwachten Logdatei dokumentieren.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 3cc8cb7f-eeb1-4d12-a87b-3081587e4b93 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 3cc8cb7f-eeb1-4d12-a87b-3081587e4b93 |

> [!info]- Links> > related: [DET.4.3 Überwachung der Angriffserkennung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.4.3%20Überwachung%20der%20Angriffserkennung.md)
