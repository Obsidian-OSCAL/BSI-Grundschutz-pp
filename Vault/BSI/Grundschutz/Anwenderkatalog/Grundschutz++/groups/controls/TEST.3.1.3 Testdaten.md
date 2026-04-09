---
class: BSI-Stand-der-Technik-Kernel
type: control
control: TEST.3.1.3 Testdaten
parent_control: TEST.3.1 Sicherheitstest
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# TEST.3.1.3 - Testdaten
Gruppe: [TEST.3 Tests](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST.3%20Tests.md)
---

** Übergeordnetes Control: ** [TEST.3.1 Sicherheitstest](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/TEST.3.1%20Sicherheitstest.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Änderungen und Tests (TEST)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST%20Änderungen%20und%20Tests.md)**<br> ***  &rarr; [Tests](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST.3%20Tests.md) *** |  | SOLLTE | die Testfälle abdeckende, aber unkritische Testdaten |  | verankern | Konfigurationshistorie | >Änderungen und Tests SOLLTE die Testfälle abdeckende, aber unkritische Testdaten verankern.

> [!info]- Guidance
>Testdaten (engl. test data) sind synthetisch erstellte oder abstrahierte Daten, die zur Durchführung von Testfällen genutzt werden. „Unkritisch“ bedeutet hier, dass die Daten keinen schützenswerten Daten wie Geschäftsgeheimnisse oder sicherheitsrelevanten Konfigurationsdetails enthalten. Testfälle (engl. test cases) sind vorab definierte Szenarien oder Abläufe, die das Verhalten einer Anwendung oder eines Systems gezielt prüfen sollen. Der Zweck der Anforderung liegt darin, sicherzustellen, dass Testaktivitäten einerseits realistische Bedingungen nachbilden, andererseits aber keine Risiken durch unbeabsichtigte Preisgabe oder Manipulation produktiver Daten entstehen. Ein Vorfall könnte beispielsweise darin bestehen, dass versehentlich echte Kundendaten in einer Testumgebung landen und durch unzureichende Sicherung Dritten zugänglich werden; durch den Einsatz unkritischer Testdaten kann dieses Risiko vermieden und dennoch die Qualität der Tests gewährleistet werden. Eine Institution kann die Anforderung praktisch umsetzen, indem sie Testdatensätze automatisiert generieren lässt, etwa durch Anonymisierung oder Pseudonymisierung produktiver Daten oder durch die Nutzung von Zufallswerten, die für Testlogik realistisch wirken. Zusätzlich kann es hilfreich sein, Regeln für Entwickler und Tester festzulegen, die dokumentieren, welche Arten von Daten zulässig sind. Auch Tools zur data masking oder synthetic data generation können verwendet werden, um komplexe Datenstrukturen ohne reale Inhalte nachzubilden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 8a88300f-98ee-41e3-9622-be00c705f252 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 8a88300f-98ee-41e3-9622-be00c705f252 |
