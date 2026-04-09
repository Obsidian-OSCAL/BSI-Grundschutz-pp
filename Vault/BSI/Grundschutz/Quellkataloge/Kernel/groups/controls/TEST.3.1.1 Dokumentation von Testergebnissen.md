---
class: BSI-Stand-der-Technik-Kernel
type: control
control: TEST.3.1.1 Dokumentation von Testergebnissen
parent_control: TEST.3.1 Sicherheitstest
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# TEST.3.1.1 - Dokumentation von Testergebnissen
Gruppe: [TEST.3 Tests](BSI/Grundschutz/Quellkataloge/Kernel/groups/TEST.3%20Tests.md)
---

** Übergeordnetes Control: ** [TEST.3.1 Sicherheitstest](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/TEST.3.1%20Sicherheitstest.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Änderungen und Tests (TEST)](BSI/Grundschutz/Quellkataloge/Kernel/groups/TEST%20Änderungen%20und%20Tests.md)**<br> ***  &rarr; [Tests](BSI/Grundschutz/Quellkataloge/Kernel/groups/TEST.3%20Tests.md) *** |  | SOLLTE | Tests | einschließlich Prüfschritte, Ergebnissen und ggf. vorgenommenen Korrekturen | dokumentieren | Freigabeplan | >Änderungen und Tests SOLLTE Tests einschließlich Prüfschritte, Ergebnissen und ggf. vorgenommenen Korrekturen dokumentieren.

> [!info]- Guidance
>Die Dokumentation von Tests zielt primär darauf ab, Transparenz und Nachvollziehbarkeit bei Änderungen zu gewährleisten, was das Risiko unbeabsichtigter Sicherheitslücken, Systemausfälle oder Datenverluste erheblich reduzieren kann. Ohne strukturierte Testdokumentation könnten beispielsweise fehlerhafte Konfigurationsänderungen unbemerkt in Produktivsysteme gelangen, was potenziell zu Verfügbarkeitsstörungen, verfälschten Daten oder kompromittierten Anwendungen führen könnte. Ein dokumentierter Testprozess ermöglicht zudem eine effektive Ursachenanalyse bei auftretenden Störungen, da alle durchgeführten Änderungen mit ihren beabsichtigten Wirkungen transparent nachvollzogen werden können. Eine nachvollziehbare und digital strukturierte Verknüpfung von Anforderung zu Prüfschritt und Prüfergebnissen kann durch OSCAL-Dokumente als strukturierte Daten erstellt werden. Gezielte Tests vor wesentlichen Änderungen tragen dazu bei, unbeabsichtigte Schwachstellen zu vermeiden, die zu unbefugtem Datenzugriff, Verlust von Geschäftsinformationen oder Ausfällen kritischer Systeme führen könnten. Je nach Art und Umfang der Änderungen lassen sich beispielsweise physische Zustände oder die Ausführung von Systemfunktionen verifizieren. Dabei werden sowohl die gewünschten Sicherheitsfunktionen als auch unerwünschte Zustände getestet, zum Beispiel, dass keine unautorisierten Funktionen aktiviert sind oder Apps ungewollt mit unbekannten Internetservern kommunizieren. Anwendbare Testarten umfassen statische und dynamische Tests, Unit- und Integrationstests sowie Regressionstests. Relevant ist dabei sowohl das Testen von manuellen Eingaben über die Benutzerschnittstelle als auch der Zugriffe über das Netzwerk, etwa über eine API. Die Tests können automatisiert (z. B. Unit-Tests, CI/CD-Tests, Schwachstellenscanner) oder manuell unterstützt (z. B. Click-Tests oder die Auswertung von LLM-Zusammenfassungen) durchgeführt werden. Sinnvoll ist es, automatische Tests für alle Funktionen und Codepfade einzusetzen, ergänzt durch manuelle Tests der wichtigsten Funktionen, wie Authentifizierung und Verschlüsselung, sowie durch Stichproben der übrigen Funktionen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | b7a747d3-cb11-46ce-8d0c-c57cc31d5ad5 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | b7a747d3-cb11-46ce-8d0c-c57cc31d5ad5 |
