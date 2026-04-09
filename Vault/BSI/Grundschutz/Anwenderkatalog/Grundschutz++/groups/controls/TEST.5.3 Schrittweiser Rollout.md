---
class: BSI-Stand-der-Technik-Kernel
type: control
control: TEST.5.3 Schrittweiser Rollout
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# TEST.5.3 - Schrittweiser Rollout
Gruppe: [TEST.5 Bereitstellung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST.5%20Bereitstellung.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Änderungen und Tests (TEST)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST%20Änderungen%20und%20Tests.md)**<br> ***  &rarr; [Bereitstellung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/TEST.5%20Bereitstellung.md) *** |  | KANN | die Inbetriebnahme | stufenweise | ausführen | Konfigurationshistorie | >Änderungen und Tests KANN die Inbetriebnahme stufenweise ausführen.

> [!info]- Guidance
>Inbetriebnahme (engl. deployment oder rollout) meint hier die technische und organisatorische Überführung einer Änderung oder Neuerung – etwa an IT-Systemen, Anwendungen oder Konfigurationen – vom Test- in den Produktivbetrieb. Eine stufenweise Inbetriebnahme (auch phased deployment, gradual rollout oder staged release) meint dabei das gezielte Ausrollen von Änderungen in mehreren kontrollierten Schritten, etwa nach Rollen, geografischen Standorten oder Systemkomponenten gruppiert, anstatt in einem einzigen vollständigen Übergang. Diese Methode kann gezielt dazu genutzt werden, Probleme frühzeitig zu erkennen und zu verhindern, dass diese sich flächendeckend auf die gesamte Infrastruktur auswirken. Ziel ist insbesondere, mögliche Risiken aus unzureichend getesteten Änderungen zu reduzieren – etwa wenn fehlerhafte Updates zu Systemausfällen, Datenverlusten oder Funktionseinschränkungen führen könnten. Auch unbeabsichtigte Interaktionen mit bestehenden Komponenten, die im Testsystem nicht abgebildet waren, könnten auftreten. Ein simples Rolling-Release-Modell, bei dem kleinschrittige Änderungen allen betroffenen Geräte gleichzeitig bereitgestellt werden, genügt NICHT um die Anforderung zu erfüllen. Ein schrittweiser Rollout ist in verschiedenen Varianten möglich: (1) der Einsatz von sogenannten Canary Releases, bei denen Änderungen zuerst auf ein kleines, repräsentatives Nutzersegment ausgerollt werden, (2) der automatisierte Rollout nach dem One-Some-All-Prinzip, (3) das gezielte Aktivieren neuer Funktionen über Feature Toggles, die zentrale Steuerung ermöglichen, oder (4) das parallele Führen alter und neuer Systemversionen in einer Blue-Green Deployment-Struktur.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | e692fdfc-02b4-48f9-8645-11ea5662b695 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | e692fdfc-02b4-48f9-8645-11ea5662b695 |
