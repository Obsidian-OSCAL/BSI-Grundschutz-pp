---
tags: Change_Management
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.4.11 Test bei Änderungen am Quellcode
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.4.11 - Test bei Änderungen am Quellcode
Tags: "[Change Management](tags_Change Management)"
Gruppe: [DEV.4 Softwareentwicklung - Code](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV.4%20Softwareentwicklung%20-%20Code.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Entwicklung (DEV)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV%20Entwicklung.md)**<br> ***  &rarr; [Softwareentwicklung - Code](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV.4%20Softwareentwicklung%20-%20Code.md) *** | Anwendungen | SOLLTE | Änderungen am Quellcode | im Einklang mit den Verfahren und Regelungen für Änderungen und Tests | testen | Freigabeplan | >Entwicklung für Anwendungen SOLLTE Änderungen am Quellcode im Einklang mit den Verfahren und Regelungen für Änderungen und Tests testen.

> [!info]- Guidance
>„Änderungen am Quellcode“ (engl. source code changes) bezeichnet im gegebenen Kontext sämtliche Modifikationen, die an den Programmbestandteilen einer Anwendung vorgenommen werden, also etwa neue Funktionen, Fehlerkorrekturen oder Anpassungen an Schnittstellen. Fehlerhafte oder ungetestete Anpassungen könnten etwa zu Sicherheitslücken, Datenverlust oder Instabilitäten im Betrieb führen, wohingegen eine strukturierte Prüfung verhindern kann, dass bekannte Schwachstellen erneut auftreten oder unbeabsichtigte Seiteneffekte entstehen. Solche Änderungen sind daher als Teil des Change Managements zu betrachten, dessen Anforderungen im Einzelnen in der Praktik Änderungen und Tests zu finden sind. Zur praktischen Umsetzung kann eine Institution jede Änderung automatisiert durch Static Application Security Testing (SAST) prüfen, wodurch potenzielle Schwachstellen direkt im Quellcode erkannt werden können. Ergänzend ist es sinnvoll Dynamic Application Security Testing (DAST) einzusetzen, um die lauffähige Anwendung in einer Testumgebung gegen typische Angriffe wie SQL-Injection oder Cross-Site-Scripting zu überprüfen. Sinnvolle Maßnahmen können dabei sein: (1) Aufbau einer Continuous-Integration-Pipeline, die automatisierte Unit-, Integrations- und Sicherheitstests einbindet und Ergebnisse konsolidiert darstellt, (2) Durchführung von manuellen explorativen Tests in einer isolierten Testumgebung, um auch unerwartete Nutzungsmuster zu prüfen, (3) Einsatz von Regressionstests, die sicherstellen können, dass neue Änderungen keine bestehenden Funktionen beeinträchtigen. Eine Institution kann damit die Qualitätssicherung stärken und gleichzeitig Angriffsflächen durch fehlerhafte Änderungen reduzieren.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 080fdbcd-0a91-4374-9d1a-c7a1eb078e97 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 080fdbcd-0a91-4374-9d1a-c7a1eb078e97 |

> [!info]- Links> > required: [TEST.1.1 Verfahren und Regelungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/TEST.1.1%20Verfahren%20und%20Regelungen.md)
